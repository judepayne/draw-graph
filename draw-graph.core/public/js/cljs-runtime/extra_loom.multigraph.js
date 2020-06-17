goog.provide('extra_loom.multigraph');
goog.require('cljs.core');
goog.require('tool_belt.core');
goog.require('loom.graph');
goog.require('loom.attr');

/**
 * @interface
 */
extra_loom.multigraph.Identified = function(){};

/**
 * Returns the id of this.
 */
extra_loom.multigraph.id = (function extra_loom$multigraph$id(this$){
if((((!((this$ == null)))) && ((!((this$.extra_loom$multigraph$Identified$id$arity$1 == null)))))){
return this$.extra_loom$multigraph$Identified$id$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (extra_loom.multigraph.id[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (extra_loom.multigraph.id["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Identified.id",this$);
}
}
}
});

/**
 * Returns true if this is a mirrored edge.
 */
extra_loom.multigraph.mirrored_QMARK_ = (function extra_loom$multigraph$mirrored_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.extra_loom$multigraph$Identified$mirrored_QMARK_$arity$1 == null)))))){
return this$.extra_loom$multigraph$Identified$mirrored_QMARK_$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (extra_loom.multigraph.mirrored_QMARK_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (extra_loom.multigraph.mirrored_QMARK_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Identified.mirrored?",this$);
}
}
}
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
extra_loom.multigraph.UniqueEdge = (function (id,src,dest,mirrored_QMARK_,__meta,__extmap,__hash){
this.id = id;
this.src = src;
this.dest = dest;
this.mirrored_QMARK_ = mirrored_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k36768,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__36780 = k36768;
var G__36780__$1 = (((G__36780 instanceof cljs.core.Keyword))?G__36780.fqn:null);
switch (G__36780__$1) {
case "id":
return self__.id;

break;
case "src":
return self__.src;

break;
case "dest":
return self__.dest;

break;
case "mirrored?":
return self__.mirrored_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36768,else__4442__auto__);

}
}));

(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__36782){
var vec__36783 = p__36782;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36783,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36783,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#extra-loom.multigraph.UniqueEdge{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"src","src",-1651076051),self__.src],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dest","dest",-34569477),self__.dest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mirrored?","mirrored?",937351285),self__.mirrored_QMARK_],null))], null),self__.__extmap));
}));

(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36767){
var self__ = this;
var G__36767__$1 = this;
return (new cljs.core.RecordIter((0),G__36767__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"dest","dest",-34569477),new cljs.core.Keyword(null,"mirrored?","mirrored?",937351285)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new extra_loom.multigraph.UniqueEdge(self__.id,self__.src,self__.dest,self__.mirrored_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-86808458 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36769,other36770){
var self__ = this;
var this36769__$1 = this;
return (((!((other36770 == null)))) && ((this36769__$1.constructor === other36770.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36769__$1.id,other36770.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36769__$1.src,other36770.src)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36769__$1.dest,other36770.dest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36769__$1.mirrored_QMARK_,other36770.mirrored_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36769__$1.__extmap,other36770.__extmap)));
}));

(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"mirrored?","mirrored?",937351285),null,new cljs.core.Keyword(null,"dest","dest",-34569477),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new extra_loom.multigraph.UniqueEdge(self__.id,self__.src,self__.dest,self__.mirrored_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__36767){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__36795 = cljs.core.keyword_identical_QMARK_;
var expr__36796 = k__4447__auto__;
if(cljs.core.truth_((pred__36795.cljs$core$IFn$_invoke$arity$2 ? pred__36795.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__36796) : pred__36795.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__36796)))){
return (new extra_loom.multigraph.UniqueEdge(G__36767,self__.src,self__.dest,self__.mirrored_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36795.cljs$core$IFn$_invoke$arity$2 ? pred__36795.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"src","src",-1651076051),expr__36796) : pred__36795.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),expr__36796)))){
return (new extra_loom.multigraph.UniqueEdge(self__.id,G__36767,self__.dest,self__.mirrored_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36795.cljs$core$IFn$_invoke$arity$2 ? pred__36795.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dest","dest",-34569477),expr__36796) : pred__36795.call(null,new cljs.core.Keyword(null,"dest","dest",-34569477),expr__36796)))){
return (new extra_loom.multigraph.UniqueEdge(self__.id,self__.src,G__36767,self__.mirrored_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36795.cljs$core$IFn$_invoke$arity$2 ? pred__36795.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mirrored?","mirrored?",937351285),expr__36796) : pred__36795.call(null,new cljs.core.Keyword(null,"mirrored?","mirrored?",937351285),expr__36796)))){
return (new extra_loom.multigraph.UniqueEdge(self__.id,self__.src,self__.dest,G__36767,self__.__meta,self__.__extmap,null));
} else {
return (new extra_loom.multigraph.UniqueEdge(self__.id,self__.src,self__.dest,self__.mirrored_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__36767),null));
}
}
}
}
}));

(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"src","src",-1651076051),self__.src,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dest","dest",-34569477),self__.dest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mirrored?","mirrored?",937351285),self__.mirrored_QMARK_,null))], null),self__.__extmap));
}));

(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__36767){
var self__ = this;
var this__4438__auto____$1 = this;
return (new extra_loom.multigraph.UniqueEdge(self__.id,self__.src,self__.dest,self__.mirrored_QMARK_,G__36767,self__.__extmap,self__.__hash));
}));

(extra_loom.multigraph.UniqueEdge.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(extra_loom.multigraph.UniqueEdge.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.Symbol(null,"dest","dest",1605962050,null),new cljs.core.Symbol(null,"mirrored?","mirrored?",-1717084484,null)], null);
}));

(extra_loom.multigraph.UniqueEdge.cljs$lang$type = true);

(extra_loom.multigraph.UniqueEdge.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"extra-loom.multigraph/UniqueEdge",null,(1),null));
}));

(extra_loom.multigraph.UniqueEdge.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"extra-loom.multigraph/UniqueEdge");
}));

/**
 * Positional factory function for extra-loom.multigraph/UniqueEdge.
 */
extra_loom.multigraph.__GT_UniqueEdge = (function extra_loom$multigraph$__GT_UniqueEdge(id,src,dest,mirrored_QMARK_){
return (new extra_loom.multigraph.UniqueEdge(id,src,dest,mirrored_QMARK_,null,null,null));
});

/**
 * Factory function for extra-loom.multigraph/UniqueEdge, taking a map of keywords to field values.
 */
extra_loom.multigraph.map__GT_UniqueEdge = (function extra_loom$multigraph$map__GT_UniqueEdge(G__36775){
var extmap__4478__auto__ = (function (){var G__36798 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36775,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"dest","dest",-34569477),new cljs.core.Keyword(null,"mirrored?","mirrored?",937351285)], 0));
if(cljs.core.record_QMARK_(G__36775)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36798);
} else {
return G__36798;
}
})();
return (new extra_loom.multigraph.UniqueEdge(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__36775),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(G__36775),new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(G__36775),new cljs.core.Keyword(null,"mirrored?","mirrored?",937351285).cljs$core$IFn$_invoke$arity$1(G__36775),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

(extra_loom.multigraph.UniqueEdge.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(extra_loom.multigraph.UniqueEdge.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return edge__$1.src;
}));

(extra_loom.multigraph.UniqueEdge.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return edge__$1.dest;
}));

(extra_loom.multigraph.UniqueEdge.prototype.extra_loom$multigraph$Identified$ = cljs.core.PROTOCOL_SENTINEL);

(extra_loom.multigraph.UniqueEdge.prototype.extra_loom$multigraph$Identified$id$arity$1 = (function (edge){
var edge__$1 = this;
return edge__$1.id;
}));

(extra_loom.multigraph.UniqueEdge.prototype.extra_loom$multigraph$Identified$mirrored_QMARK_$arity$1 = (function (edge){
var edge__$1 = this;
return edge__$1.mirrored_QMARK_;
}));
(cljs.core.PersistentVector.prototype.extra_loom$multigraph$Identified$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.extra_loom$multigraph$Identified$id$arity$1 = (function (this$){
var this$__$1 = this;
return null;
}));

(cljs.core.PersistentVector.prototype.extra_loom$multigraph$Identified$mirrored_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return false;
}));
/**
 * Returns a new UniqueEdge instance from src and dest.
 */
extra_loom.multigraph.make_edge = (function extra_loom$multigraph$make_edge(var_args){
var G__36812 = arguments.length;
switch (G__36812) {
case 2:
return extra_loom.multigraph.make_edge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return extra_loom.multigraph.make_edge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(extra_loom.multigraph.make_edge.cljs$core$IFn$_invoke$arity$2 = (function (src,dest){
return (new extra_loom.multigraph.UniqueEdge(cljs.core.random_uuid(),src,dest,false,null,null,null));
}));

(extra_loom.multigraph.make_edge.cljs$core$IFn$_invoke$arity$3 = (function (src,dest,mirrored_QMARK_){
return (new extra_loom.multigraph.UniqueEdge(cljs.core.random_uuid(),src,dest,mirrored_QMARK_,null,null,null));
}));

(extra_loom.multigraph.make_edge.cljs$lang$maxFixedArity = 3);

/**
 * Is e a UniqueEdge?
 */
extra_loom.multigraph.unique_edge_QMARK_ = (function extra_loom$multigraph$unique_edge_QMARK_(e){
return (e instanceof extra_loom.multigraph.UniqueEdge);
});
/**
 * Does this edge have the same src and dest as the other?
 */
extra_loom.multigraph.edge_equiv_QMARK_ = (function extra_loom$multigraph$edge_equiv_QMARK_(this$,other){
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(extra_loom.multigraph.mirrored_QMARK_(this$),extra_loom.multigraph.mirrored_QMARK_(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loom.graph.src(this$),loom.graph.src(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loom.graph.dest(this$),loom.graph.dest(other))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(extra_loom.multigraph.mirrored_QMARK_(this$),extra_loom.multigraph.mirrored_QMARK_(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loom.graph.src(this$),loom.graph.dest(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loom.graph.dest(this$),loom.graph.src(other))))));
});
/**
 * Is e an edge?
 */
extra_loom.multigraph.edge_QMARK_ = (function extra_loom$multigraph$edge_QMARK_(e){
return ((extra_loom.multigraph.unique_edge_QMARK_(e)) || ((((e instanceof cljs.core.PersistentVector)) && ((cljs.core.count(e) > (1))))));
});

/**
 * @interface
 */
extra_loom.multigraph.MultipleEdge = function(){};

/**
 * Returns the edges in g between two nodes.
 */
extra_loom.multigraph.edges_between = (function extra_loom$multigraph$edges_between(g,n1,n2){
if((((!((g == null)))) && ((!((g.extra_loom$multigraph$MultipleEdge$edges_between$arity$3 == null)))))){
return g.extra_loom$multigraph$MultipleEdge$edges_between$arity$3(g,n1,n2);
} else {
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (extra_loom.multigraph.edges_between[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4488__auto__.call(null,g,n1,n2));
} else {
var m__4485__auto__ = (extra_loom.multigraph.edges_between["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4485__auto__.call(null,g,n1,n2));
} else {
throw cljs.core.missing_protocol("MultipleEdge.edges-between",g);
}
}
}
});

extra_loom.multigraph.edges_between_STAR_ = (function extra_loom$multigraph$edges_between_STAR_(g,n1,n2){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),n1,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068),n2], null));
});
/**
 * Fetches the edges in the graph of edge-type which should be either
 * :in-edges or :out-edges.
 */
extra_loom.multigraph.edges_of_type = (function extra_loom$multigraph$edges_of_type(g,edge_type){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__36843){
var vec__36844 = p__36843;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36844,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,tool_belt.core.join(cljs.core.vals((edge_type.cljs$core$IFn$_invoke$arity$1 ? edge_type.cljs$core$IFn$_invoke$arity$1(v) : edge_type.call(null,v)))));
}),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"nodemap","nodemap",146309934).cljs$core$IFn$_invoke$arity$1(g));
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
extra_loom.multigraph.MultiEdgeEditableDigraph = (function (nodemap,attrs,__meta,__extmap,__hash){
this.nodemap = nodemap;
this.attrs = attrs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k36851,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__36857 = k36851;
var G__36857__$1 = (((G__36857 instanceof cljs.core.Keyword))?G__36857.fqn:null);
switch (G__36857__$1) {
case "nodemap":
return self__.nodemap;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36851,else__4442__auto__);

}
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__36865){
var vec__36867 = p__36865;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36867,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36867,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#extra-loom.multigraph.MultiEdgeEditableDigraph{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodemap","nodemap",146309934),self__.nodemap],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null))], null),self__.__extmap));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36850){
var self__ = this;
var G__36850__$1 = this;
return (new cljs.core.RecordIter((0),G__36850__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new extra_loom.multigraph.MultiEdgeEditableDigraph(self__.nodemap,self__.attrs,self__.__meta,self__.__extmap,self__.__hash));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-95798618 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36852,other36853){
var self__ = this;
var this36852__$1 = this;
return (((!((other36853 == null)))) && ((this36852__$1.constructor === other36853.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36852__$1.nodemap,other36853.nodemap)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36852__$1.attrs,other36853.attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36852__$1.__extmap,other36853.__extmap)));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new extra_loom.multigraph.MultiEdgeEditableDigraph(self__.nodemap,self__.attrs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__36850){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__36893 = cljs.core.keyword_identical_QMARK_;
var expr__36894 = k__4447__auto__;
if(cljs.core.truth_((pred__36893.cljs$core$IFn$_invoke$arity$2 ? pred__36893.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodemap","nodemap",146309934),expr__36894) : pred__36893.call(null,new cljs.core.Keyword(null,"nodemap","nodemap",146309934),expr__36894)))){
return (new extra_loom.multigraph.MultiEdgeEditableDigraph(G__36850,self__.attrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36893.cljs$core$IFn$_invoke$arity$2 ? pred__36893.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__36894) : pred__36893.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__36894)))){
return (new extra_loom.multigraph.MultiEdgeEditableDigraph(self__.nodemap,G__36850,self__.__meta,self__.__extmap,null));
} else {
return (new extra_loom.multigraph.MultiEdgeEditableDigraph(self__.nodemap,self__.attrs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__36850),null));
}
}
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodemap","nodemap",146309934),self__.nodemap,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null))], null),self__.__extmap));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__36850){
var self__ = this;
var this__4438__auto____$1 = this;
return (new extra_loom.multigraph.MultiEdgeEditableDigraph(self__.nodemap,self__.attrs,G__36850,self__.__extmap,self__.__hash));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodemap","nodemap",1786841461,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)], null);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.cljs$lang$type = true);

(extra_loom.multigraph.MultiEdgeEditableDigraph.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"extra-loom.multigraph/MultiEdgeEditableDigraph",null,(1),null));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"extra-loom.multigraph/MultiEdgeEditableDigraph");
}));

/**
 * Positional factory function for extra-loom.multigraph/MultiEdgeEditableDigraph.
 */
extra_loom.multigraph.__GT_MultiEdgeEditableDigraph = (function extra_loom$multigraph$__GT_MultiEdgeEditableDigraph(nodemap,attrs){
return (new extra_loom.multigraph.MultiEdgeEditableDigraph(nodemap,attrs,null,null,null));
});

/**
 * Factory function for extra-loom.multigraph/MultiEdgeEditableDigraph, taking a map of keywords to field values.
 */
extra_loom.multigraph.map__GT_MultiEdgeEditableDigraph = (function extra_loom$multigraph$map__GT_MultiEdgeEditableDigraph(G__36854){
var extmap__4478__auto__ = (function (){var G__36918 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36854,new cljs.core.Keyword(null,"nodemap","nodemap",146309934),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], 0));
if(cljs.core.record_QMARK_(G__36854)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36918);
} else {
return G__36918;
}
})();
return (new extra_loom.multigraph.MultiEdgeEditableDigraph(new cljs.core.Keyword(null,"nodemap","nodemap",146309934).cljs$core$IFn$_invoke$arity$1(G__36854),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__36854),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
extra_loom.multigraph.MultiEdgeEditableGraph = (function (nodemap,attrs,__meta,__extmap,__hash){
this.nodemap = nodemap;
this.attrs = attrs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k36927,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__36936 = k36927;
var G__36936__$1 = (((G__36936 instanceof cljs.core.Keyword))?G__36936.fqn:null);
switch (G__36936__$1) {
case "nodemap":
return self__.nodemap;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36927,else__4442__auto__);

}
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__36937){
var vec__36938 = p__36937;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36938,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36938,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#extra-loom.multigraph.MultiEdgeEditableGraph{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodemap","nodemap",146309934),self__.nodemap],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null))], null),self__.__extmap));
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36926){
var self__ = this;
var G__36926__$1 = this;
return (new cljs.core.RecordIter((0),G__36926__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new extra_loom.multigraph.MultiEdgeEditableGraph(self__.nodemap,self__.attrs,self__.__meta,self__.__extmap,self__.__hash));
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (514383800 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36928,other36929){
var self__ = this;
var this36928__$1 = this;
return (((!((other36929 == null)))) && ((this36928__$1.constructor === other36929.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36928__$1.nodemap,other36929.nodemap)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36928__$1.attrs,other36929.attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36928__$1.__extmap,other36929.__extmap)));
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new extra_loom.multigraph.MultiEdgeEditableGraph(self__.nodemap,self__.attrs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__36926){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__36951 = cljs.core.keyword_identical_QMARK_;
var expr__36952 = k__4447__auto__;
if(cljs.core.truth_((pred__36951.cljs$core$IFn$_invoke$arity$2 ? pred__36951.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodemap","nodemap",146309934),expr__36952) : pred__36951.call(null,new cljs.core.Keyword(null,"nodemap","nodemap",146309934),expr__36952)))){
return (new extra_loom.multigraph.MultiEdgeEditableGraph(G__36926,self__.attrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36951.cljs$core$IFn$_invoke$arity$2 ? pred__36951.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__36952) : pred__36951.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__36952)))){
return (new extra_loom.multigraph.MultiEdgeEditableGraph(self__.nodemap,G__36926,self__.__meta,self__.__extmap,null));
} else {
return (new extra_loom.multigraph.MultiEdgeEditableGraph(self__.nodemap,self__.attrs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__36926),null));
}
}
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodemap","nodemap",146309934),self__.nodemap,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null))], null),self__.__extmap));
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__36926){
var self__ = this;
var this__4438__auto____$1 = this;
return (new extra_loom.multigraph.MultiEdgeEditableGraph(self__.nodemap,self__.attrs,G__36926,self__.__extmap,self__.__hash));
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodemap","nodemap",1786841461,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)], null);
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.cljs$lang$type = true);

(extra_loom.multigraph.MultiEdgeEditableGraph.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"extra-loom.multigraph/MultiEdgeEditableGraph",null,(1),null));
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"extra-loom.multigraph/MultiEdgeEditableGraph");
}));

/**
 * Positional factory function for extra-loom.multigraph/MultiEdgeEditableGraph.
 */
extra_loom.multigraph.__GT_MultiEdgeEditableGraph = (function extra_loom$multigraph$__GT_MultiEdgeEditableGraph(nodemap,attrs){
return (new extra_loom.multigraph.MultiEdgeEditableGraph(nodemap,attrs,null,null,null));
});

/**
 * Factory function for extra-loom.multigraph/MultiEdgeEditableGraph, taking a map of keywords to field values.
 */
extra_loom.multigraph.map__GT_MultiEdgeEditableGraph = (function extra_loom$multigraph$map__GT_MultiEdgeEditableGraph(G__36934){
var extmap__4478__auto__ = (function (){var G__36966 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36934,new cljs.core.Keyword(null,"nodemap","nodemap",146309934),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], 0));
if(cljs.core.record_QMARK_(G__36934)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36966);
} else {
return G__36966;
}
})();
return (new extra_loom.multigraph.MultiEdgeEditableGraph(new cljs.core.Keyword(null,"nodemap","nodemap",146309934).cljs$core$IFn$_invoke$arity$1(G__36934),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__36934),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

extra_loom.multigraph.digraph_QMARK_ = (function extra_loom$multigraph$digraph_QMARK_(g){
return cljs.core.boolean$((((!((g == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$Digraph$))))?true:(((!g.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(loom.graph.Digraph,g):false)):cljs.core.native_satisfies_QMARK_(loom.graph.Digraph,g)));
});
/**
 * Is node in g?
 */
extra_loom.multigraph.has_node_QMARK__STAR_ = (function extra_loom$multigraph$has_node_QMARK__STAR_(g,node){
return cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),node], null)));
});
/**
 * Returns the edges of the graph.
 */
extra_loom.multigraph.edges_STAR_ = (function extra_loom$multigraph$edges_STAR_(g){
return extra_loom.multigraph.edges_of_type(g,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068));
});
/**
 * Returns the nodes of the graph.
 */
extra_loom.multigraph.nodes_STAR_ = (function extra_loom$multigraph$nodes_STAR_(g){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"nodemap","nodemap",146309934).cljs$core$IFn$_invoke$arity$1(g)));
});
/**
 * Returns the in-edges of the node.
 */
extra_loom.multigraph.ins = (function extra_loom$multigraph$ins(g,node){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__36988){
var vec__36990 = p__36988;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36990,(1),null);
if(cljs.core.truth_(tool_belt.core.in_QMARK_(cljs.core.keys(new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068).cljs$core$IFn$_invoke$arity$1(v)),node))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068),node], null)));
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"nodemap","nodemap",146309934).cljs$core$IFn$_invoke$arity$1(g));
});
/**
 * Adds the in-edges of the node to the node.
 */
extra_loom.multigraph.add_in_edges = (function extra_loom$multigraph$add_in_edges(g,node){
return cljs.core.assoc_in(g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),node,new cljs.core.Keyword(null,"in-edges","in-edges",221484951)], null),extra_loom.multigraph.ins(g,node));
});
/**
 * Adds the node to the graph.
 */
extra_loom.multigraph.add_node = (function extra_loom$multigraph$add_node(g,node){
return extra_loom.multigraph.add_in_edges(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),node,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068)], null),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),node);
});
/**
 * Adds the nodes to the graph.
 */
extra_loom.multigraph.add_nodes = (function extra_loom$multigraph$add_nodes(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37367 = arguments.length;
var i__4790__auto___37368 = (0);
while(true){
if((i__4790__auto___37368 < len__4789__auto___37367)){
args__4795__auto__.push((arguments[i__4790__auto___37368]));

var G__37369 = (i__4790__auto___37368 + (1));
i__4790__auto___37368 = G__37369;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return extra_loom.multigraph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(extra_loom.multigraph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(extra_loom.multigraph.add_node,g,nodes);
}));

(extra_loom.multigraph.add_nodes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(extra_loom.multigraph.add_nodes.cljs$lang$applyTo = (function (seq36998){
var G__36999 = cljs.core.first(seq36998);
var seq36998__$1 = cljs.core.next(seq36998);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36999,seq36998__$1);
}));

/**
 * Reverses the direction of an edge.
 */
extra_loom.multigraph.reverse_edge = (function extra_loom$multigraph$reverse_edge(e){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(e,new cljs.core.Keyword(null,"src","src",-1651076051),loom.graph.dest(e),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dest","dest",-34569477),loom.graph.src(e)], 0));
});
/**
 * Creates a mirrored edge.
 */
extra_loom.multigraph.mirrored_edge = (function extra_loom$multigraph$mirrored_edge(e){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(extra_loom.multigraph.reverse_edge(e),new cljs.core.Keyword(null,"mirrored?","mirrored?",937351285),true);
});
/**
 * Creates a mirrored edge of e and adds to the graph.
 */
extra_loom.multigraph.add_mirrored_edge = (function extra_loom$multigraph$add_mirrored_edge(g,e){
var s = loom.graph.src(e);
var d = loom.graph.dest(e);
var e_mirror = extra_loom.multigraph.mirrored_edge(e);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),d,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068),s], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),e_mirror),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),s,new cljs.core.Keyword(null,"in-edges","in-edges",221484951),d], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),e_mirror);
});
/**
 * Adds an edge to the graph. The edge should be either a 2-vector [src dest]
 *   or a 3-vector [src dest attr-map]. mirrored? indicates a mirrored edge in a graph, not digraph.
 */
extra_loom.multigraph.add_edge = (function extra_loom$multigraph$add_edge(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37380 = arguments.length;
var i__4790__auto___37381 = (0);
while(true){
if((i__4790__auto___37381 < len__4789__auto___37380)){
args__4795__auto__.push((arguments[i__4790__auto___37381]));

var G__37382 = (i__4790__auto___37381 + (1));
i__4790__auto___37381 = G__37382;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return extra_loom.multigraph.add_edge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(extra_loom.multigraph.add_edge.cljs$core$IFn$_invoke$arity$variadic = (function (g,edge,p__37018){
var map__37019 = p__37018;
var map__37019__$1 = (((((!((map__37019 == null))))?(((((map__37019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37019):map__37019);
var mirrored_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37019__$1,new cljs.core.Keyword(null,"mirrored?","mirrored?",937351285),false);
var vec__37024 = edge;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024,(1),null);
var am = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024,(2),null);
var e = extra_loom.multigraph.make_edge.cljs$core$IFn$_invoke$arity$2(s,d);
return tool_belt.core.apply_to_if.cljs$core$IFn$_invoke$arity$variadic(extra_loom.multigraph.add_nodes.cljs$core$IFn$_invoke$arity$variadic(tool_belt.core.apply_to_if.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),s,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068),d], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),e),mirrored_QMARK_,extra_loom.multigraph.add_mirrored_edge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,d], 0)),am,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),e.id], null),am], 0));
}));

(extra_loom.multigraph.add_edge.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(extra_loom.multigraph.add_edge.cljs$lang$applyTo = (function (seq37008){
var G__37009 = cljs.core.first(seq37008);
var seq37008__$1 = cljs.core.next(seq37008);
var G__37010 = cljs.core.first(seq37008__$1);
var seq37008__$2 = cljs.core.next(seq37008__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37009,G__37010,seq37008__$2);
}));

extra_loom.multigraph.excise_edge = (function extra_loom$multigraph$excise_edge(m,k,edges_after){
if(cljs.core.empty_QMARK_(edges_after)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,edges_after);
}
});
/**
 * Removes a unique edge from the graph.
 */
extra_loom.multigraph.remove_unique_edge = (function extra_loom$multigraph$remove_unique_edge(g,e){
var map__37030 = e;
var map__37030__$1 = (((((!((map__37030 == null))))?(((((map__37030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37030):map__37030);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37030__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37030__$1,new cljs.core.Keyword(null,"dest","dest",-34569477));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37030__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var out_edges_after = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(extra_loom.multigraph.edges_between_STAR_(g,s,d),e);
var in_edges_after = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(extra_loom.multigraph.edges_between_STAR_(g,d,s),e);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),s,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068)], null),extra_loom.multigraph.excise_edge,d,out_edges_after),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),d,new cljs.core.Keyword(null,"in-edges","in-edges",221484951)], null),extra_loom.multigraph.excise_edge,s,in_edges_after),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),s,new cljs.core.Keyword(null,"in-edges","in-edges",221484951)], null),extra_loom.multigraph.excise_edge,d,in_edges_after),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),d,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068)], null),extra_loom.multigraph.excise_edge,s,out_edges_after),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null),cljs.core.dissoc,id);
});
/**
 * Removes the edge from the graph.
 */
extra_loom.multigraph.remove_edge = (function extra_loom$multigraph$remove_edge(g,e){
var edges = ((extra_loom.multigraph.unique_edge_QMARK_(e))?(new cljs.core.List(null,e,null,(1),null)):cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37034_SHARP_){
return extra_loom.multigraph.edge_equiv_QMARK_(e,p1__37034_SHARP_);
}),extra_loom.multigraph.edges_between_STAR_(g,loom.graph.src(e),loom.graph.dest(e)))
);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(extra_loom.multigraph.remove_unique_edge,g,edges);
});
/**
 * Removes the node from the graph.
 */
extra_loom.multigraph.remove_node = (function extra_loom$multigraph$remove_node(g,node){
return tool_belt.core.update_in_all.cljs$core$IFn$_invoke$arity$variadic(tool_belt.core.update_in_all.cljs$core$IFn$_invoke$arity$variadic(tool_belt.core.dissoc_in(tool_belt.core.dissoc_in(g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),node], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"in-edges","in-edges",221484951)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});
/**
 * Removes any empty entries in in-edges and out-edges. clean up
 */
extra_loom.multigraph.remove_empty_edge_containers = (function extra_loom$multigraph$remove_empty_edge_containers(g){
return tool_belt.core.dissoc_in_when(tool_belt.core.dissoc_in_when(g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068),new cljs.core.Keyword(null,"all","all",892129742)], null),cljs.core.empty_QMARK_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"in-edges","in-edges",221484951),new cljs.core.Keyword(null,"all","all",892129742)], null),cljs.core.empty_QMARK_);
});
/**
 * Reverses all the edges in a map of :out-edges or :in-edges
 */
extra_loom.multigraph.reverse_edges = (function extra_loom$multigraph$reverse_edges(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__37041){
var vec__37042 = p__37041;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37042,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37042,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(extra_loom.multigraph.reverse_edge,v)));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * Swaps in-edges with out-edges and reverse the direction of each edge in both.
 */
extra_loom.multigraph.swap_ins_outs = (function extra_loom$multigraph$swap_ins_outs(m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068),extra_loom.multigraph.reverse_edges(new cljs.core.Keyword(null,"in-edges","in-edges",221484951).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"in-edges","in-edges",221484951),extra_loom.multigraph.reverse_edges(new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068).cljs$core$IFn$_invoke$arity$1(m))], 0));
});
/**
 * Adds an attr to an edge in the graph.
 */
extra_loom.multigraph.add_attr_to_edge = (function extra_loom$multigraph$add_attr_to_edge(var_args){
var G__37052 = arguments.length;
switch (G__37052) {
case 4:
return extra_loom.multigraph.add_attr_to_edge.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return extra_loom.multigraph.add_attr_to_edge.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(extra_loom.multigraph.add_attr_to_edge.cljs$core$IFn$_invoke$arity$4 = (function (g,edge,k,v){
return cljs.core.assoc_in(g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),extra_loom.multigraph.id(edge),k], null),v);
}));

(extra_loom.multigraph.add_attr_to_edge.cljs$core$IFn$_invoke$arity$5 = (function (g,n1,n2,k,v){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37047_SHARP_,p2__37048_SHARP_){
return extra_loom.multigraph.add_attr_to_edge.cljs$core$IFn$_invoke$arity$4(p1__37047_SHARP_,p2__37048_SHARP_,k,v);
}),g,extra_loom.multigraph.edges_between(g,n1,n2));
}));

(extra_loom.multigraph.add_attr_to_edge.cljs$lang$maxFixedArity = 5);

/**
 * Adds an attr to the node in the graph.
 */
extra_loom.multigraph.add_attr_to_node = (function extra_loom$multigraph$add_attr_to_node(g,node,k,v){
return cljs.core.assoc_in(g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node,k], null),v);
});
/**
 * Removes an attr from the edge in the graph.
 */
extra_loom.multigraph.remove_attr_from_edge = (function extra_loom$multigraph$remove_attr_from_edge(var_args){
var G__37058 = arguments.length;
switch (G__37058) {
case 3:
return extra_loom.multigraph.remove_attr_from_edge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return extra_loom.multigraph.remove_attr_from_edge.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(extra_loom.multigraph.remove_attr_from_edge.cljs$core$IFn$_invoke$arity$3 = (function (g,edge,k){
return tool_belt.core.dissoc_in_clean(g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),extra_loom.multigraph.id(edge),k], null));
}));

(extra_loom.multigraph.remove_attr_from_edge.cljs$core$IFn$_invoke$arity$4 = (function (g,n1,n2,k){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37055_SHARP_,p2__37056_SHARP_){
return extra_loom.multigraph.remove_attr_from_edge.cljs$core$IFn$_invoke$arity$3(p1__37055_SHARP_,p2__37056_SHARP_,k);
}),g,extra_loom.multigraph.edges_between(g,n1,n2));
}));

(extra_loom.multigraph.remove_attr_from_edge.cljs$lang$maxFixedArity = 4);

/**
 * Removes an attr from the node in the graph.
 */
extra_loom.multigraph.remove_attr_from_node = (function extra_loom$multigraph$remove_attr_from_node(g,node,k){
return tool_belt.core.dissoc_in_clean(g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node,k], null));
});
/**
 * Returns the attr with key k or a map of values for the node or edge in the graph.
 *   A map of values {edge-id attr) is returned when the edge is specified as n1 n2
 *   and so is (potentially) ambiguous.
 */
extra_loom.multigraph.attr_STAR_ = (function extra_loom$multigraph$attr_STAR_(var_args){
var G__37079 = arguments.length;
switch (G__37079) {
case 3:
return extra_loom.multigraph.attr_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return extra_loom.multigraph.attr_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(extra_loom.multigraph.attr_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (g,node_or_edge,k){
if(extra_loom.multigraph.unique_edge_QMARK_(node_or_edge)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),extra_loom.multigraph.id(node_or_edge),k], null));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null));

}
}));

(extra_loom.multigraph.attr_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (g,n1,n2,k){
var es = extra_loom.multigraph.edges_between(g,n1,n2);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ats,edge){
var at = extra_loom.multigraph.attr_STAR_.cljs$core$IFn$_invoke$arity$3(g,edge,k);
if(cljs.core.truth_(at)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ats,extra_loom.multigraph.id(edge),at);
} else {
return ats;
}
}),null,es);
}));

(extra_loom.multigraph.attr_STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Returns the attrs or a map of values for the node or edge in the graph.
 *   A map of values {edge-id attrs) is returned when the edge is specified as n1 n2
 *   and so is (potentially) ambiguous.
 */
extra_loom.multigraph.attrs_STAR_ = (function extra_loom$multigraph$attrs_STAR_(var_args){
var G__37086 = arguments.length;
switch (G__37086) {
case 2:
return extra_loom.multigraph.attrs_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return extra_loom.multigraph.attrs_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(extra_loom.multigraph.attrs_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (g,node_or_edge){
if(extra_loom.multigraph.unique_edge_QMARK_(node_or_edge)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),extra_loom.multigraph.id(node_or_edge)], null));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null));

}
}));

(extra_loom.multigraph.attrs_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
var es = extra_loom.multigraph.edges_between(g,n1,n2);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (atts,edge){
var ats = extra_loom.multigraph.attrs_STAR_.cljs$core$IFn$_invoke$arity$2(g,edge);
if(cljs.core.truth_(ats)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(atts,extra_loom.multigraph.id(edge),ats);
} else {
return atts;
}
}),null,es);
}));

(extra_loom.multigraph.attrs_STAR_.cljs$lang$maxFixedArity = 3);

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return extra_loom.multigraph.nodes_STAR_(g__$1);
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
return extra_loom.multigraph.edges_STAR_(g__$1);
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(extra_loom.multigraph.nodes_STAR_(g__$1),node);
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
var m = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),n1,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068)], null));
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([n2]),cljs.core.keys(m)));
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),node,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068)], null)));
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(tool_belt.core.join(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),node,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068)], null)))));
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
return tool_belt.core.join(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),node,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068)], null))));
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(extra_loom.multigraph.add_nodes,g__$1,nodes);
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
if(extra_loom.multigraph.digraph_QMARK_(g__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(extra_loom.multigraph.add_edge,g__$1,edges);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37099_SHARP_,p2__37100_SHARP_){
return extra_loom.multigraph.add_edge.cljs$core$IFn$_invoke$arity$variadic(p1__37099_SHARP_,p2__37100_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mirrored?","mirrored?",937351285),true], 0));
}),g__$1,edges);
}
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(extra_loom.multigraph.remove_node,g__$1,nodes);
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return extra_loom.multigraph.remove_empty_edge_containers(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(extra_loom.multigraph.remove_edge,g__$1,edges));
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodemap","nodemap",146309934),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentArrayMap.EMPTY], 0));
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.extra_loom$multigraph$MultipleEdge$ = cljs.core.PROTOCOL_SENTINEL);

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.extra_loom$multigraph$MultipleEdge$edges_between$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return extra_loom.multigraph.edges_between_STAR_(g__$1,n1,n2);
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$attr$AttrGraph$ = cljs.core.PROTOCOL_SENTINEL);

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = (function (g,node_or_edge,k,v){
var g__$1 = this;
if(extra_loom.multigraph.unique_edge_QMARK_(node_or_edge)){
return extra_loom.multigraph.add_attr_to_edge.cljs$core$IFn$_invoke$arity$4(g__$1,node_or_edge,k,v);
} else {
return extra_loom.multigraph.add_attr_to_node(g__$1,node_or_edge,k,v);
}
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = (function (g,n1,n2,k,v){
var g__$1 = this;
return extra_loom.multigraph.add_attr_to_edge.cljs$core$IFn$_invoke$arity$5(g__$1,n1,n2,k,v);
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(extra_loom.multigraph.unique_edge_QMARK_(node_or_edge)){
return extra_loom.multigraph.remove_attr_from_edge.cljs$core$IFn$_invoke$arity$3(g__$1,node_or_edge,k);
} else {
return extra_loom.multigraph.remove_attr_from_node(g__$1,node_or_edge,k);
}
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return extra_loom.multigraph.remove_attr_from_edge.cljs$core$IFn$_invoke$arity$4(g__$1,n1,n2,k);
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$attr$AttrGraph$attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
return extra_loom.multigraph.attr_STAR_.cljs$core$IFn$_invoke$arity$3(g__$1,node_or_edge,k);
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$attr$AttrGraph$attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return extra_loom.multigraph.attr_STAR_.cljs$core$IFn$_invoke$arity$4(g__$1,n1,n2,k);
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = (function (g,node_or_edge){
var g__$1 = this;
return extra_loom.multigraph.attrs_STAR_.cljs$core$IFn$_invoke$arity$2(g__$1,node_or_edge);
}));

(extra_loom.multigraph.MultiEdgeEditableGraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return extra_loom.multigraph.attrs_STAR_.cljs$core$IFn$_invoke$arity$3(g__$1,n1,n2);
}));
(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return extra_loom.multigraph.nodes_STAR_(g__$1);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
return extra_loom.multigraph.edges_STAR_(g__$1);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(extra_loom.multigraph.nodes_STAR_(g__$1),node);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
var m = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),n1,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068)], null));
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([n2]),cljs.core.keys(m)));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),node,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068)], null)));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(tool_belt.core.join(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),node,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068)], null)))));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
return tool_belt.core.join(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),node,new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068)], null))));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),node,new cljs.core.Keyword(null,"in-edges","in-edges",221484951)], null)));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(tool_belt.core.join(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),node,new cljs.core.Keyword(null,"in-edges","in-edges",221484951)], null)))));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
return tool_belt.core.join(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),node,new cljs.core.Keyword(null,"in-edges","in-edges",221484951)], null))));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return tool_belt.core.update_in_all(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodemap","nodemap",146309934),new cljs.core.Keyword(null,"all","all",892129742)], null),extra_loom.multigraph.swap_ins_outs);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(extra_loom.multigraph.add_nodes,g__$1,nodes);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
if(extra_loom.multigraph.digraph_QMARK_(g__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(extra_loom.multigraph.add_edge,g__$1,edges);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37099_SHARP_,p2__37100_SHARP_){
return extra_loom.multigraph.add_edge.cljs$core$IFn$_invoke$arity$variadic(p1__37099_SHARP_,p2__37100_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mirrored?","mirrored?",937351285),true], 0));
}),g__$1,edges);
}
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(extra_loom.multigraph.remove_node,g__$1,nodes);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return extra_loom.multigraph.remove_empty_edge_containers(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(extra_loom.multigraph.remove_edge,g__$1,edges));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodemap","nodemap",146309934),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentArrayMap.EMPTY], 0));
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.extra_loom$multigraph$MultipleEdge$ = cljs.core.PROTOCOL_SENTINEL);

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.extra_loom$multigraph$MultipleEdge$edges_between$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return extra_loom.multigraph.edges_between_STAR_(g__$1,n1,n2);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$attr$AttrGraph$ = cljs.core.PROTOCOL_SENTINEL);

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = (function (g,node_or_edge,k,v){
var g__$1 = this;
if(extra_loom.multigraph.unique_edge_QMARK_(node_or_edge)){
return extra_loom.multigraph.add_attr_to_edge.cljs$core$IFn$_invoke$arity$4(g__$1,node_or_edge,k,v);
} else {
return extra_loom.multigraph.add_attr_to_node(g__$1,node_or_edge,k,v);
}
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = (function (g,n1,n2,k,v){
var g__$1 = this;
return extra_loom.multigraph.add_attr_to_edge.cljs$core$IFn$_invoke$arity$5(g__$1,n1,n2,k,v);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(extra_loom.multigraph.unique_edge_QMARK_(node_or_edge)){
return extra_loom.multigraph.remove_attr_from_edge.cljs$core$IFn$_invoke$arity$3(g__$1,node_or_edge,k);
} else {
return extra_loom.multigraph.remove_attr_from_node(g__$1,node_or_edge,k);
}
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return extra_loom.multigraph.remove_attr_from_edge.cljs$core$IFn$_invoke$arity$4(g__$1,n1,n2,k);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$attr$AttrGraph$attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
return extra_loom.multigraph.attr_STAR_.cljs$core$IFn$_invoke$arity$3(g__$1,node_or_edge,k);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$attr$AttrGraph$attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return extra_loom.multigraph.attr_STAR_.cljs$core$IFn$_invoke$arity$4(g__$1,n1,n2,k);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = (function (g,node_or_edge){
var g__$1 = this;
return extra_loom.multigraph.attrs_STAR_.cljs$core$IFn$_invoke$arity$2(g__$1,node_or_edge);
}));

(extra_loom.multigraph.MultiEdgeEditableDigraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return extra_loom.multigraph.attrs_STAR_.cljs$core$IFn$_invoke$arity$3(g__$1,n1,n2);
}));
/**
 * Builds up a graph (i.e. adds edges and nodes) from any combination of
 *   adjacency maps, edges, or nodes.
 */
extra_loom.multigraph.build_graph = (function extra_loom$multigraph$build_graph(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37467 = arguments.length;
var i__4790__auto___37468 = (0);
while(true){
if((i__4790__auto___37468 < len__4789__auto___37467)){
args__4795__auto__.push((arguments[i__4790__auto___37468]));

var G__37469 = (i__4790__auto___37468 + (1));
i__4790__auto___37468 = G__37469;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return extra_loom.multigraph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(extra_loom.multigraph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function extra_loom$multigraph$build(g__$1,init){
if(cljs.core.map_QMARK_(init)){
var es = ((cljs.core.map_QMARK_(cljs.core.val(cljs.core.first(init))))?(function (){var iter__4582__auto__ = (function extra_loom$multigraph$build_$_iter__37210(s__37211){
return (new cljs.core.LazySeq(null,(function (){
var s__37211__$1 = s__37211;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37211__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__37216 = cljs.core.first(xs__6292__auto__);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37216,(0),null);
var nbrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37216,(1),null);
var iterys__4578__auto__ = ((function (s__37211__$1,vec__37216,n,nbrs,xs__6292__auto__,temp__5735__auto__){
return (function extra_loom$multigraph$build_$_iter__37210_$_iter__37212(s__37213){
return (new cljs.core.LazySeq(null,((function (s__37211__$1,vec__37216,n,nbrs,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__37213__$1 = s__37213;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37213__$1);
if(temp__5735__auto____$1){
var s__37213__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37213__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37213__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37215 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37214 = (0);
while(true){
if((i__37214 < size__4581__auto__)){
var vec__37219 = cljs.core._nth(c__4580__auto__,i__37214);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37219,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37219,(1),null);
cljs.core.chunk_append(b__37215,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__37470 = (i__37214 + (1));
i__37214 = G__37470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37215),extra_loom$multigraph$build_$_iter__37210_$_iter__37212(cljs.core.chunk_rest(s__37213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37215),null);
}
} else {
var vec__37222 = cljs.core.first(s__37213__$2);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37222,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37222,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),extra_loom$multigraph$build_$_iter__37210_$_iter__37212(cljs.core.rest(s__37213__$2)));
}
} else {
return null;
}
break;
}
});})(s__37211__$1,vec__37216,n,nbrs,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__37211__$1,vec__37216,n,nbrs,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(nbrs));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,extra_loom$multigraph$build_$_iter__37210(cljs.core.rest(s__37211__$1)));
} else {
var G__37484 = cljs.core.rest(s__37211__$1);
s__37211__$1 = G__37484;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(init);
})():(function (){var iter__4582__auto__ = (function extra_loom$multigraph$build_$_iter__37225(s__37226){
return (new cljs.core.LazySeq(null,(function (){
var s__37226__$1 = s__37226;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37226__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__37232 = cljs.core.first(xs__6292__auto__);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37232,(0),null);
var nbrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37232,(1),null);
var iterys__4578__auto__ = ((function (s__37226__$1,vec__37232,n,nbrs,xs__6292__auto__,temp__5735__auto__){
return (function extra_loom$multigraph$build_$_iter__37225_$_iter__37227(s__37228){
return (new cljs.core.LazySeq(null,((function (s__37226__$1,vec__37232,n,nbrs,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__37228__$1 = s__37228;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37228__$1);
if(temp__5735__auto____$1){
var s__37228__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37228__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37228__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37230 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37229 = (0);
while(true){
if((i__37229 < size__4581__auto__)){
var nbr = cljs.core._nth(c__4580__auto__,i__37229);
cljs.core.chunk_append(b__37230,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__37488 = (i__37229 + (1));
i__37229 = G__37488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37230),extra_loom$multigraph$build_$_iter__37225_$_iter__37227(cljs.core.chunk_rest(s__37228__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37230),null);
}
} else {
var nbr = cljs.core.first(s__37228__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),extra_loom$multigraph$build_$_iter__37225_$_iter__37227(cljs.core.rest(s__37228__$2)));
}
} else {
return null;
}
break;
}
});})(s__37226__$1,vec__37232,n,nbrs,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__37226__$1,vec__37232,n,nbrs,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(nbrs));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,extra_loom$multigraph$build_$_iter__37225(cljs.core.rest(s__37226__$1)));
} else {
var G__37494 = cljs.core.rest(s__37226__$1);
s__37226__$1 = G__37494;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(init);
})());
return loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(g__$1,cljs.core.keys(init)),es);
} else {
if(extra_loom.multigraph.edge_QMARK_(init)){
return loom.graph.add_edges_STAR_(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [init], null));
} else {
return extra_loom.multigraph.add_node(g__$1,init);

}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(build,g,inits);
}));

(extra_loom.multigraph.build_graph.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(extra_loom.multigraph.build_graph.cljs$lang$applyTo = (function (seq37151){
var G__37152 = cljs.core.first(seq37151);
var seq37151__$1 = cljs.core.next(seq37151);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37152,seq37151__$1);
}));

extra_loom.multigraph.multigraph = (function extra_loom$multigraph$multigraph(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37497 = arguments.length;
var i__4790__auto___37498 = (0);
while(true){
if((i__4790__auto___37498 < len__4789__auto___37497)){
args__4795__auto__.push((arguments[i__4790__auto___37498]));

var G__37499 = (i__4790__auto___37498 + (1));
i__4790__auto___37498 = G__37499;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return extra_loom.multigraph.multigraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(extra_loom.multigraph.multigraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(extra_loom.multigraph.build_graph,(new extra_loom.multigraph.MultiEdgeEditableGraph(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(extra_loom.multigraph.multigraph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(extra_loom.multigraph.multigraph.cljs$lang$applyTo = (function (seq37236){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37236));
}));

extra_loom.multigraph.multidigraph = (function extra_loom$multigraph$multidigraph(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37501 = arguments.length;
var i__4790__auto___37502 = (0);
while(true){
if((i__4790__auto___37502 < len__4789__auto___37501)){
args__4795__auto__.push((arguments[i__4790__auto___37502]));

var G__37503 = (i__4790__auto___37502 + (1));
i__4790__auto___37502 = G__37503;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return extra_loom.multigraph.multidigraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(extra_loom.multigraph.multidigraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(extra_loom.multigraph.build_graph,(new extra_loom.multigraph.MultiEdgeEditableDigraph(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(extra_loom.multigraph.multidigraph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(extra_loom.multigraph.multidigraph.cljs$lang$applyTo = (function (seq37238){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37238));
}));

/**
 * The distinct edges in the graph. eliminates mirrored edges.
 */
extra_loom.multigraph.distinct_edges = (function extra_loom$multigraph$distinct_edges(g){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"mirrored?","mirrored?",937351285)),loom.graph.edges(g));
});
/**
 * Pretty print a multidigraph
 */
extra_loom.multigraph.pprint = (function extra_loom$multigraph$pprint(g){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Multidigraph"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(loom.graph.nodes(g)),"Nodes:"], 0));

var seq__37241_37504 = cljs.core.seq(loom.graph.nodes(g));
var chunk__37242_37505 = null;
var count__37243_37506 = (0);
var i__37244_37507 = (0);
while(true){
if((i__37244_37507 < count__37243_37506)){
var node_37508 = chunk__37242_37505.cljs$core$IIndexed$_nth$arity$2(null,i__37244_37507);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",node_37508,(function (){var a = loom.attr.attrs(g,node_37508);
if(cljs.core.seq(a)){
return a;
} else {
return "";
}
})()], 0));


var G__37509 = seq__37241_37504;
var G__37510 = chunk__37242_37505;
var G__37511 = count__37243_37506;
var G__37512 = (i__37244_37507 + (1));
seq__37241_37504 = G__37509;
chunk__37242_37505 = G__37510;
count__37243_37506 = G__37511;
i__37244_37507 = G__37512;
continue;
} else {
var temp__5735__auto___37513 = cljs.core.seq(seq__37241_37504);
if(temp__5735__auto___37513){
var seq__37241_37518__$1 = temp__5735__auto___37513;
if(cljs.core.chunked_seq_QMARK_(seq__37241_37518__$1)){
var c__4609__auto___37519 = cljs.core.chunk_first(seq__37241_37518__$1);
var G__37520 = cljs.core.chunk_rest(seq__37241_37518__$1);
var G__37521 = c__4609__auto___37519;
var G__37522 = cljs.core.count(c__4609__auto___37519);
var G__37523 = (0);
seq__37241_37504 = G__37520;
chunk__37242_37505 = G__37521;
count__37243_37506 = G__37522;
i__37244_37507 = G__37523;
continue;
} else {
var node_37528 = cljs.core.first(seq__37241_37518__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",node_37528,(function (){var a = loom.attr.attrs(g,node_37528);
if(cljs.core.seq(a)){
return a;
} else {
return "";
}
})()], 0));


var G__37531 = cljs.core.next(seq__37241_37518__$1);
var G__37532 = null;
var G__37533 = (0);
var G__37534 = (0);
seq__37241_37504 = G__37531;
chunk__37242_37505 = G__37532;
count__37243_37506 = G__37533;
i__37244_37507 = G__37534;
continue;
}
} else {
}
}
break;
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(loom.graph.edges(g)),"Edges:"], 0));

var seq__37246 = cljs.core.seq(loom.graph.edges(g));
var chunk__37247 = null;
var count__37248 = (0);
var i__37249 = (0);
while(true){
if((i__37249 < count__37248)){
var edge = chunk__37247.cljs$core$IIndexed$_nth$arity$2(null,i__37249);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",loom.graph.src(edge),"->",loom.graph.dest(edge),(function (){var a = loom.attr.attrs(g,edge);
if(cljs.core.seq(a)){
return a;
} else {
return "";
}
})()], 0));


var G__37539 = seq__37246;
var G__37540 = chunk__37247;
var G__37541 = count__37248;
var G__37542 = (i__37249 + (1));
seq__37246 = G__37539;
chunk__37247 = G__37540;
count__37248 = G__37541;
i__37249 = G__37542;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37246);
if(temp__5735__auto__){
var seq__37246__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37246__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37246__$1);
var G__37543 = cljs.core.chunk_rest(seq__37246__$1);
var G__37544 = c__4609__auto__;
var G__37545 = cljs.core.count(c__4609__auto__);
var G__37546 = (0);
seq__37246 = G__37543;
chunk__37247 = G__37544;
count__37248 = G__37545;
i__37249 = G__37546;
continue;
} else {
var edge = cljs.core.first(seq__37246__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",loom.graph.src(edge),"->",loom.graph.dest(edge),(function (){var a = loom.attr.attrs(g,edge);
if(cljs.core.seq(a)){
return a;
} else {
return "";
}
})()], 0));


var G__37548 = cljs.core.next(seq__37246__$1);
var G__37549 = null;
var G__37550 = (0);
var G__37551 = (0);
seq__37246 = G__37548;
chunk__37247 = G__37549;
count__37248 = G__37550;
i__37249 = G__37551;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Merges multigraphs or multidigraphs.
 */
extra_loom.multigraph.merge_graphs = (function extra_loom$multigraph$merge_graphs(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37552 = arguments.length;
var i__4790__auto___37553 = (0);
while(true){
if((i__4790__auto___37553 < len__4789__auto___37552)){
args__4795__auto__.push((arguments[i__4790__auto___37553]));

var G__37556 = (i__4790__auto___37553 + (1));
i__4790__auto___37553 = G__37556;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return extra_loom.multigraph.merge_graphs.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(extra_loom.multigraph.merge_graphs.cljs$core$IFn$_invoke$arity$variadic = (function (gs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tool_belt.core.deep_merge_with,clojure.set.union),gs);
}));

(extra_loom.multigraph.merge_graphs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(extra_loom.multigraph.merge_graphs.cljs$lang$applyTo = (function (seq37253){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37253));
}));

/**
 * Returns true is g is an extra-loom graph.
 */
extra_loom.multigraph.extra_loom_graph_QMARK_ = (function extra_loom$multigraph$extra_loom_graph_QMARK_(g){
var t = cljs.core.type(g);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,extra_loom.multigraph.MultiEdgeEditableDigraph)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,extra_loom.multigraph.MultiEdgeEditableGraph)));
});

//# sourceMappingURL=extra_loom.multigraph.js.map
