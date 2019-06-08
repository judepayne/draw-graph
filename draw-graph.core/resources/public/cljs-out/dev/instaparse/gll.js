// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.gll');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.failure');
goog.require('instaparse.reduction');
goog.require('instaparse.combinators_source');
goog.require('instaparse.print');
goog.require('instaparse.util');
goog.require('goog.i18n.uChar');
instaparse.gll._STAR_diagnostic_char_lookahead_STAR_ = (10);

instaparse.gll.get_parser = (function instaparse$gll$get_parser(grammar,p){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(grammar,p,p);
});














instaparse.gll._parse = (function instaparse$gll$_parse(parser,index,tramp){

var G__22044 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser);
var G__22044__$1 = (((G__22044 instanceof cljs.core.Keyword))?G__22044.fqn:null);
switch (G__22044__$1) {
case "nt":
return (instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.non_terminal_parse.call(null,parser,index,tramp));

break;
case "alt":
return (instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.alt_parse.call(null,parser,index,tramp));

break;
case "cat":
return (instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.cat_parse.call(null,parser,index,tramp));

break;
case "string":
return (instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_parse.call(null,parser,index,tramp));

break;
case "string-ci":
return (instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_case_insensitive_parse.call(null,parser,index,tramp));

break;
case "char":
return (instaparse.gll.char_range_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.char_range_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.char_range_parse.call(null,parser,index,tramp));

break;
case "epsilon":
return (instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.epsilon_parse.call(null,parser,index,tramp));

break;
case "opt":
return (instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.opt_parse.call(null,parser,index,tramp));

break;
case "plus":
return (instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.plus_parse.call(null,parser,index,tramp));

break;
case "rep":
return (instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.rep_parse.call(null,parser,index,tramp));

break;
case "star":
return (instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.star_parse.call(null,parser,index,tramp));

break;
case "regexp":
return (instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.regexp_parse.call(null,parser,index,tramp));

break;
case "look":
return (instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.lookahead_parse.call(null,parser,index,tramp));

break;
case "neg":
return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp));

break;
case "ord":
return (instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.ordered_alt_parse.call(null,parser,index,tramp));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22044__$1)].join('')));

}
});













instaparse.gll._full_parse = (function instaparse$gll$_full_parse(parser,index,tramp){

var G__22046 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser);
var G__22046__$1 = (((G__22046 instanceof cljs.core.Keyword))?G__22046.fqn:null);
switch (G__22046__$1) {
case "nt":
return (instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.non_terminal_full_parse.call(null,parser,index,tramp));

break;
case "alt":
return (instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.alt_full_parse.call(null,parser,index,tramp));

break;
case "cat":
return (instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.cat_full_parse.call(null,parser,index,tramp));

break;
case "string":
return (instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_full_parse.call(null,parser,index,tramp));

break;
case "string-ci":
return (instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_case_insensitive_full_parse.call(null,parser,index,tramp));

break;
case "char":
return (instaparse.gll.char_range_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.char_range_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.char_range_full_parse.call(null,parser,index,tramp));

break;
case "epsilon":
return (instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.epsilon_full_parse.call(null,parser,index,tramp));

break;
case "opt":
return (instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.opt_full_parse.call(null,parser,index,tramp));

break;
case "plus":
return (instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.plus_full_parse.call(null,parser,index,tramp));

break;
case "rep":
return (instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.rep_full_parse.call(null,parser,index,tramp));

break;
case "star":
return (instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.star_full_parse.call(null,parser,index,tramp));

break;
case "regexp":
return (instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.regexp_full_parse.call(null,parser,index,tramp));

break;
case "look":
return (instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.lookahead_full_parse.call(null,parser,index,tramp));

break;
case "neg":
return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp));

break;
case "ord":
return (instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.ordered_alt_full_parse.call(null,parser,index,tramp));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22046__$1)].join('')));

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
instaparse.gll.Failure = (function (index,reason,__meta,__extmap,__hash){
this.index = index;
this.reason = reason;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k22049,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__22053 = k22049;
var G__22053__$1 = (((G__22053 instanceof cljs.core.Keyword))?G__22053.fqn:null);
switch (G__22053__$1) {
case "index":
return self__.index;

break;
case "reason":
return self__.reason;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22049,else__4388__auto__);

}
});

instaparse.gll.Failure.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__22054){
var vec__22055 = p__22054;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22055,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22055,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#instaparse.gll.Failure{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$index,self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reason,self__.reason],null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22048){
var self__ = this;
var G__22048__$1 = this;
return (new cljs.core.RecordIter((0),G__22048__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$index,cljs.core.cst$kw$reason], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

instaparse.gll.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__22058 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1140991288 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__22058(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

instaparse.gll.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22050,other22051){
var self__ = this;
var this22050__$1 = this;
return (((!((other22051 == null)))) && ((this22050__$1.constructor === other22051.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22050__$1.index,other22051.index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22050__$1.reason,other22051.reason)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22050__$1.__extmap,other22051.__extmap)));
});

instaparse.gll.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$index,null,cljs.core.cst$kw$reason,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__22048){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__22059 = cljs.core.keyword_identical_QMARK_;
var expr__22060 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__22062 = cljs.core.cst$kw$index;
var G__22063 = expr__22060;
return (pred__22059.cljs$core$IFn$_invoke$arity$2 ? pred__22059.cljs$core$IFn$_invoke$arity$2(G__22062,G__22063) : pred__22059.call(null,G__22062,G__22063));
})())){
return (new instaparse.gll.Failure(G__22048,self__.reason,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22064 = cljs.core.cst$kw$reason;
var G__22065 = expr__22060;
return (pred__22059.cljs$core$IFn$_invoke$arity$2 ? pred__22059.cljs$core$IFn$_invoke$arity$2(G__22064,G__22065) : pred__22059.call(null,G__22064,G__22065));
})())){
return (new instaparse.gll.Failure(self__.index,G__22048,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__22048),null));
}
}
});

instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$index,self__.index,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$reason,self__.reason,null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__22048){
var self__ = this;
var this__4384__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,G__22048,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

instaparse.gll.Failure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$index,cljs.core.cst$sym$reason], null);
});

instaparse.gll.Failure.cljs$lang$type = true;

instaparse.gll.Failure.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"instaparse.gll/Failure",null,(1),null));
});

instaparse.gll.Failure.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"instaparse.gll/Failure");
});

/**
 * Positional factory function for instaparse.gll/Failure.
 */
instaparse.gll.__GT_Failure = (function instaparse$gll$__GT_Failure(index,reason){
return (new instaparse.gll.Failure(index,reason,null,null,null));
});

/**
 * Factory function for instaparse.gll/Failure, taking a map of keywords to field values.
 */
instaparse.gll.map__GT_Failure = (function instaparse$gll$map__GT_Failure(G__22052){
var extmap__4424__auto__ = (function (){var G__22066 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22052,cljs.core.cst$kw$index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$reason], 0));
if(cljs.core.record_QMARK_(G__22052)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22066);
} else {
return G__22066;
}
})();
return (new instaparse.gll.Failure(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(G__22052),cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(G__22052),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (fail,writer,_){
var fail__$1 = this;
return cljs.core._write(writer,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22068_22072 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22069_22073 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22070_22074 = true;
var _STAR_print_fn_STAR__temp_val__22071_22075 = ((function (_STAR_print_newline_STAR__orig_val__22068_22072,_STAR_print_fn_STAR__orig_val__22069_22073,_STAR_print_newline_STAR__temp_val__22070_22074,sb__4661__auto__,fail__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22068_22072,_STAR_print_fn_STAR__orig_val__22069_22073,_STAR_print_newline_STAR__temp_val__22070_22074,sb__4661__auto__,fail__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22070_22074;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22071_22075;

try{instaparse.failure.pprint_failure(fail__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22069_22073;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22068_22072;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
});
instaparse.gll.failure_type = cljs.core.type((new instaparse.gll.Failure(null,null,null,null,null)));
instaparse.gll.text__GT_segment = (function instaparse$gll$text__GT_segment(text){
return text;
});
instaparse.gll.sub_sequence = cljs.core.subs;

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
instaparse.gll.Tramp = (function (grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_,__meta,__extmap,__hash){
this.grammar = grammar;
this.text = text;
this.segment = segment;
this.fail_index = fail_index;
this.node_builder = node_builder;
this.stack = stack;
this.next_stack = next_stack;
this.generation = generation;
this.negative_listeners = negative_listeners;
this.msg_cache = msg_cache;
this.nodes = nodes;
this.success = success;
this.failure = failure;
this.trace_QMARK_ = trace_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k22077,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__22081 = k22077;
var G__22081__$1 = (((G__22081 instanceof cljs.core.Keyword))?G__22081.fqn:null);
switch (G__22081__$1) {
case "grammar":
return self__.grammar;

break;
case "text":
return self__.text;

break;
case "segment":
return self__.segment;

break;
case "fail-index":
return self__.fail_index;

break;
case "node-builder":
return self__.node_builder;

break;
case "stack":
return self__.stack;

break;
case "next-stack":
return self__.next_stack;

break;
case "generation":
return self__.generation;

break;
case "negative-listeners":
return self__.negative_listeners;

break;
case "msg-cache":
return self__.msg_cache;

break;
case "nodes":
return self__.nodes;

break;
case "success":
return self__.success;

break;
case "failure":
return self__.failure;

break;
case "trace?":
return self__.trace_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22077,else__4388__auto__);

}
});

instaparse.gll.Tramp.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__22082){
var vec__22083 = p__22082;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22083,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22083,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

instaparse.gll.Tramp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#instaparse.gll.Tramp{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$grammar,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text,self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$segment,self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fail_DASH_index,self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$node_DASH_builder,self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stack,self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$next_DASH_stack,self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$generation,self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$negative_DASH_listeners,self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$msg_DASH_cache,self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$nodes,self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$success,self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$failure,self__.failure],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trace_QMARK_,self__.trace_QMARK_],null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22076){
var self__ = this;
var G__22076__$1 = this;
return (new cljs.core.RecordIter((0),G__22076__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grammar,cljs.core.cst$kw$text,cljs.core.cst$kw$segment,cljs.core.cst$kw$fail_DASH_index,cljs.core.cst$kw$node_DASH_builder,cljs.core.cst$kw$stack,cljs.core.cst$kw$next_DASH_stack,cljs.core.cst$kw$generation,cljs.core.cst$kw$negative_DASH_listeners,cljs.core.cst$kw$msg_DASH_cache,cljs.core.cst$kw$nodes,cljs.core.cst$kw$success,cljs.core.cst$kw$failure,cljs.core.cst$kw$trace_QMARK_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

instaparse.gll.Tramp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Tramp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__22086 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (166878148 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__22086(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

instaparse.gll.Tramp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22078,other22079){
var self__ = this;
var this22078__$1 = this;
return (((!((other22079 == null)))) && ((this22078__$1.constructor === other22079.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.grammar,other22079.grammar)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.text,other22079.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.segment,other22079.segment)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.fail_index,other22079.fail_index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.node_builder,other22079.node_builder)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.stack,other22079.stack)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.next_stack,other22079.next_stack)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.generation,other22079.generation)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.negative_listeners,other22079.negative_listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.msg_cache,other22079.msg_cache)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.nodes,other22079.nodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.success,other22079.success)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.failure,other22079.failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.trace_QMARK_,other22079.trace_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22078__$1.__extmap,other22079.__extmap)));
});

instaparse.gll.Tramp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [cljs.core.cst$kw$msg_DASH_cache,null,cljs.core.cst$kw$negative_DASH_listeners,null,cljs.core.cst$kw$generation,null,cljs.core.cst$kw$failure,null,cljs.core.cst$kw$fail_DASH_index,null,cljs.core.cst$kw$grammar,null,cljs.core.cst$kw$success,null,cljs.core.cst$kw$nodes,null,cljs.core.cst$kw$node_DASH_builder,null,cljs.core.cst$kw$segment,null,cljs.core.cst$kw$stack,null,cljs.core.cst$kw$trace_QMARK_,null,cljs.core.cst$kw$next_DASH_stack,null,cljs.core.cst$kw$text,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__22076){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__22087 = cljs.core.keyword_identical_QMARK_;
var expr__22088 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__22090 = cljs.core.cst$kw$grammar;
var G__22091 = expr__22088;
return (pred__22087.cljs$core$IFn$_invoke$arity$2 ? pred__22087.cljs$core$IFn$_invoke$arity$2(G__22090,G__22091) : pred__22087.call(null,G__22090,G__22091));
})())){
return (new instaparse.gll.Tramp(G__22076,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22092 = cljs.core.cst$kw$text;
var G__22093 = expr__22088;
return (pred__22087.cljs$core$IFn$_invoke$arity$2 ? pred__22087.cljs$core$IFn$_invoke$arity$2(G__22092,G__22093) : pred__22087.call(null,G__22092,G__22093));
})())){
return (new instaparse.gll.Tramp(self__.grammar,G__22076,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22094 = cljs.core.cst$kw$segment;
var G__22095 = expr__22088;
return (pred__22087.cljs$core$IFn$_invoke$arity$2 ? pred__22087.cljs$core$IFn$_invoke$arity$2(G__22094,G__22095) : pred__22087.call(null,G__22094,G__22095));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__22076,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22096 = cljs.core.cst$kw$fail_DASH_index;
var G__22097 = expr__22088;
return (pred__22087.cljs$core$IFn$_invoke$arity$2 ? pred__22087.cljs$core$IFn$_invoke$arity$2(G__22096,G__22097) : pred__22087.call(null,G__22096,G__22097));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__22076,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22098 = cljs.core.cst$kw$node_DASH_builder;
var G__22099 = expr__22088;
return (pred__22087.cljs$core$IFn$_invoke$arity$2 ? pred__22087.cljs$core$IFn$_invoke$arity$2(G__22098,G__22099) : pred__22087.call(null,G__22098,G__22099));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__22076,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22100 = cljs.core.cst$kw$stack;
var G__22101 = expr__22088;
return (pred__22087.cljs$core$IFn$_invoke$arity$2 ? pred__22087.cljs$core$IFn$_invoke$arity$2(G__22100,G__22101) : pred__22087.call(null,G__22100,G__22101));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__22076,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22102 = cljs.core.cst$kw$next_DASH_stack;
var G__22103 = expr__22088;
return (pred__22087.cljs$core$IFn$_invoke$arity$2 ? pred__22087.cljs$core$IFn$_invoke$arity$2(G__22102,G__22103) : pred__22087.call(null,G__22102,G__22103));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__22076,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22104 = cljs.core.cst$kw$generation;
var G__22105 = expr__22088;
return (pred__22087.cljs$core$IFn$_invoke$arity$2 ? pred__22087.cljs$core$IFn$_invoke$arity$2(G__22104,G__22105) : pred__22087.call(null,G__22104,G__22105));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__22076,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22106 = cljs.core.cst$kw$negative_DASH_listeners;
var G__22107 = expr__22088;
return (pred__22087.cljs$core$IFn$_invoke$arity$2 ? pred__22087.cljs$core$IFn$_invoke$arity$2(G__22106,G__22107) : pred__22087.call(null,G__22106,G__22107));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__22076,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22108 = cljs.core.cst$kw$msg_DASH_cache;
var G__22109 = expr__22088;
return (pred__22087.cljs$core$IFn$_invoke$arity$2 ? pred__22087.cljs$core$IFn$_invoke$arity$2(G__22108,G__22109) : pred__22087.call(null,G__22108,G__22109));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__22076,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22110 = cljs.core.cst$kw$nodes;
var G__22111 = expr__22088;
return (pred__22087.cljs$core$IFn$_invoke$arity$2 ? pred__22087.cljs$core$IFn$_invoke$arity$2(G__22110,G__22111) : pred__22087.call(null,G__22110,G__22111));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__22076,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22112 = cljs.core.cst$kw$success;
var G__22113 = expr__22088;
return (pred__22087.cljs$core$IFn$_invoke$arity$2 ? pred__22087.cljs$core$IFn$_invoke$arity$2(G__22112,G__22113) : pred__22087.call(null,G__22112,G__22113));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__22076,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22114 = cljs.core.cst$kw$failure;
var G__22115 = expr__22088;
return (pred__22087.cljs$core$IFn$_invoke$arity$2 ? pred__22087.cljs$core$IFn$_invoke$arity$2(G__22114,G__22115) : pred__22087.call(null,G__22114,G__22115));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__22076,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22116 = cljs.core.cst$kw$trace_QMARK_;
var G__22117 = expr__22088;
return (pred__22087.cljs$core$IFn$_invoke$arity$2 ? pred__22087.cljs$core$IFn$_invoke$arity$2(G__22116,G__22117) : pred__22087.call(null,G__22116,G__22117));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__22076,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__22076),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

instaparse.gll.Tramp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$grammar,self__.grammar,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$text,self__.text,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$segment,self__.segment,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fail_DASH_index,self__.fail_index,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$node_DASH_builder,self__.node_builder,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$stack,self__.stack,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$next_DASH_stack,self__.next_stack,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$generation,self__.generation,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$negative_DASH_listeners,self__.negative_listeners,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$msg_DASH_cache,self__.msg_cache,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$nodes,self__.nodes,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$success,self__.success,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$failure,self__.failure,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$trace_QMARK_,self__.trace_QMARK_,null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__22076){
var self__ = this;
var this__4384__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,G__22076,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

instaparse.gll.Tramp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$grammar,cljs.core.cst$sym$text,cljs.core.cst$sym$segment,cljs.core.cst$sym$fail_DASH_index,cljs.core.cst$sym$node_DASH_builder,cljs.core.cst$sym$stack,cljs.core.cst$sym$next_DASH_stack,cljs.core.cst$sym$generation,cljs.core.cst$sym$negative_DASH_listeners,cljs.core.cst$sym$msg_DASH_cache,cljs.core.cst$sym$nodes,cljs.core.cst$sym$success,cljs.core.cst$sym$failure,cljs.core.cst$sym$trace_QMARK_], null);
});

instaparse.gll.Tramp.cljs$lang$type = true;

instaparse.gll.Tramp.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"instaparse.gll/Tramp",null,(1),null));
});

instaparse.gll.Tramp.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"instaparse.gll/Tramp");
});

/**
 * Positional factory function for instaparse.gll/Tramp.
 */
instaparse.gll.__GT_Tramp = (function instaparse$gll$__GT_Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_,null,null,null));
});

/**
 * Factory function for instaparse.gll/Tramp, taking a map of keywords to field values.
 */
instaparse.gll.map__GT_Tramp = (function instaparse$gll$map__GT_Tramp(G__22080){
var extmap__4424__auto__ = (function (){var G__22118 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22080,cljs.core.cst$kw$grammar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$text,cljs.core.cst$kw$segment,cljs.core.cst$kw$fail_DASH_index,cljs.core.cst$kw$node_DASH_builder,cljs.core.cst$kw$stack,cljs.core.cst$kw$next_DASH_stack,cljs.core.cst$kw$generation,cljs.core.cst$kw$negative_DASH_listeners,cljs.core.cst$kw$msg_DASH_cache,cljs.core.cst$kw$nodes,cljs.core.cst$kw$success,cljs.core.cst$kw$failure,cljs.core.cst$kw$trace_QMARK_], 0));
if(cljs.core.record_QMARK_(G__22080)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22118);
} else {
return G__22118;
}
})();
return (new instaparse.gll.Tramp(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(G__22080),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__22080),cljs.core.cst$kw$segment.cljs$core$IFn$_invoke$arity$1(G__22080),cljs.core.cst$kw$fail_DASH_index.cljs$core$IFn$_invoke$arity$1(G__22080),cljs.core.cst$kw$node_DASH_builder.cljs$core$IFn$_invoke$arity$1(G__22080),cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(G__22080),cljs.core.cst$kw$next_DASH_stack.cljs$core$IFn$_invoke$arity$1(G__22080),cljs.core.cst$kw$generation.cljs$core$IFn$_invoke$arity$1(G__22080),cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(G__22080),cljs.core.cst$kw$msg_DASH_cache.cljs$core$IFn$_invoke$arity$1(G__22080),cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(G__22080),cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(G__22080),cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(G__22080),cljs.core.cst$kw$trace_QMARK_.cljs$core$IFn$_invoke$arity$1(G__22080),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

instaparse.gll.make_tramp = (function instaparse$gll$make_tramp(var_args){
var G__22121 = arguments.length;
switch (G__22121) {
case 2:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2 = (function (grammar,text){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,instaparse.gll.text__GT_segment(text),(-1),null);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3 = (function (grammar,text,segment){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,segment,(-1),null);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4 = (function (grammar,text,fail_index,node_builder){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,instaparse.gll.text__GT_segment(text),fail_index,node_builder);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5 = (function (grammar,text,segment,fail_index,node_builder){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map_by(cljs.core._GT_)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new instaparse.gll.Failure((0),cljs.core.PersistentVector.EMPTY,null,null,null))),false,null,null,null));
});

instaparse.gll.make_tramp.cljs$lang$maxFixedArity = 5;

instaparse.gll.make_success = (function instaparse$gll$make_success(result,index){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$result,result,cljs.core.cst$kw$index,index], null);
});
instaparse.gll.total_success_QMARK_ = (function instaparse$gll$total_success_QMARK_(tramp,s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)),cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(s));
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
instaparse.gll.Node = (function (listeners,full_listeners,results,full_results,__meta,__extmap,__hash){
this.listeners = listeners;
this.full_listeners = full_listeners;
this.results = results;
this.full_results = full_results;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k22124,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__22128 = k22124;
var G__22128__$1 = (((G__22128 instanceof cljs.core.Keyword))?G__22128.fqn:null);
switch (G__22128__$1) {
case "listeners":
return self__.listeners;

break;
case "full-listeners":
return self__.full_listeners;

break;
case "results":
return self__.results;

break;
case "full-results":
return self__.full_results;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22124,else__4388__auto__);

}
});

instaparse.gll.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__22129){
var vec__22130 = p__22129;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22130,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22130,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

instaparse.gll.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#instaparse.gll.Node{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$listeners,self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$full_DASH_listeners,self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$results,self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$full_DASH_results,self__.full_results],null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22123){
var self__ = this;
var G__22123__$1 = this;
return (new cljs.core.RecordIter((0),G__22123__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$listeners,cljs.core.cst$kw$full_DASH_listeners,cljs.core.cst$kw$results,cljs.core.cst$kw$full_DASH_results], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

instaparse.gll.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__22133 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1610074144 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__22133(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

instaparse.gll.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22125,other22126){
var self__ = this;
var this22125__$1 = this;
return (((!((other22126 == null)))) && ((this22125__$1.constructor === other22126.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22125__$1.listeners,other22126.listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22125__$1.full_listeners,other22126.full_listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22125__$1.results,other22126.results)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22125__$1.full_results,other22126.full_results)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22125__$1.__extmap,other22126.__extmap)));
});

instaparse.gll.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$full_DASH_results,null,cljs.core.cst$kw$full_DASH_listeners,null,cljs.core.cst$kw$listeners,null,cljs.core.cst$kw$results,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__22123){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__22134 = cljs.core.keyword_identical_QMARK_;
var expr__22135 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__22137 = cljs.core.cst$kw$listeners;
var G__22138 = expr__22135;
return (pred__22134.cljs$core$IFn$_invoke$arity$2 ? pred__22134.cljs$core$IFn$_invoke$arity$2(G__22137,G__22138) : pred__22134.call(null,G__22137,G__22138));
})())){
return (new instaparse.gll.Node(G__22123,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22139 = cljs.core.cst$kw$full_DASH_listeners;
var G__22140 = expr__22135;
return (pred__22134.cljs$core$IFn$_invoke$arity$2 ? pred__22134.cljs$core$IFn$_invoke$arity$2(G__22139,G__22140) : pred__22134.call(null,G__22139,G__22140));
})())){
return (new instaparse.gll.Node(self__.listeners,G__22123,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22141 = cljs.core.cst$kw$results;
var G__22142 = expr__22135;
return (pred__22134.cljs$core$IFn$_invoke$arity$2 ? pred__22134.cljs$core$IFn$_invoke$arity$2(G__22141,G__22142) : pred__22134.call(null,G__22141,G__22142));
})())){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__22123,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22143 = cljs.core.cst$kw$full_DASH_results;
var G__22144 = expr__22135;
return (pred__22134.cljs$core$IFn$_invoke$arity$2 ? pred__22134.cljs$core$IFn$_invoke$arity$2(G__22143,G__22144) : pred__22134.call(null,G__22143,G__22144));
})())){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__22123,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__22123),null));
}
}
}
}
});

instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$listeners,self__.listeners,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$full_DASH_listeners,self__.full_listeners,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$results,self__.results,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$full_DASH_results,self__.full_results,null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__22123){
var self__ = this;
var this__4384__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__22123,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

instaparse.gll.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$listeners,cljs.core.cst$sym$full_DASH_listeners,cljs.core.cst$sym$results,cljs.core.cst$sym$full_DASH_results], null);
});

instaparse.gll.Node.cljs$lang$type = true;

instaparse.gll.Node.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"instaparse.gll/Node",null,(1),null));
});

instaparse.gll.Node.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"instaparse.gll/Node");
});

/**
 * Positional factory function for instaparse.gll/Node.
 */
instaparse.gll.__GT_Node = (function instaparse$gll$__GT_Node(listeners,full_listeners,results,full_results){
return (new instaparse.gll.Node(listeners,full_listeners,results,full_results,null,null,null));
});

/**
 * Factory function for instaparse.gll/Node, taking a map of keywords to field values.
 */
instaparse.gll.map__GT_Node = (function instaparse$gll$map__GT_Node(G__22127){
var extmap__4424__auto__ = (function (){var G__22145 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22127,cljs.core.cst$kw$listeners,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$full_DASH_listeners,cljs.core.cst$kw$results,cljs.core.cst$kw$full_DASH_results], 0));
if(cljs.core.record_QMARK_(G__22127)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22145);
} else {
return G__22145;
}
})();
return (new instaparse.gll.Node(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(G__22127),cljs.core.cst$kw$full_DASH_listeners.cljs$core$IFn$_invoke$arity$1(G__22127),cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(G__22127),cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(G__22127),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

instaparse.gll.make_node = (function instaparse$gll$make_node(){
return (new instaparse.gll.Node(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),null,null,null));
});
/**
 * Pushes an item onto the trampoline's stack
 */
instaparse.gll.push_stack = (function instaparse$gll$push_stack(tramp,item){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,item);
});
/**
 * Pushes onto stack a message to a given listener about a result
 */
instaparse.gll.push_message = (function instaparse$gll$push_message(tramp,listener,result){
var cache = cljs.core.cst$kw$msg_DASH_cache.cljs$core$IFn$_invoke$arity$1(tramp);
var i = cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result);
var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [listener,i], null);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache),k,(0));
var f = ((function (cache,i,k,c){
return (function (){
return (listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(result) : listener.call(null,result));
});})(cache,i,k,c))
;

if((c > cljs.core.deref(cljs.core.cst$kw$generation.cljs$core$IFn$_invoke$arity$1(tramp)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$next_DASH_stack.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,f);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,f);
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,k,(c + (1)));
});
/**
 * Tests whether node already has a listener
 */
instaparse.gll.listener_exists_QMARK_ = (function instaparse$gll$listener_exists_QMARK_(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5720__auto__ = (function (){var fexpr__22147 = cljs.core.deref(nodes);
return (fexpr__22147.cljs$core$IFn$_invoke$arity$1 ? fexpr__22147.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__22147.call(null,node_key));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return (cljs.core.count(cljs.core.deref(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(node))) > (0));
} else {
return null;
}
});
/**
 * Tests whether node already has a listener or full-listener
 */
instaparse.gll.full_listener_exists_QMARK_ = (function instaparse$gll$full_listener_exists_QMARK_(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5720__auto__ = (function (){var fexpr__22148 = cljs.core.deref(nodes);
return (fexpr__22148.cljs$core$IFn$_invoke$arity$1 ? fexpr__22148.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__22148.call(null,node_key));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return (((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$full_DASH_listeners.cljs$core$IFn$_invoke$arity$1(node))) > (0))) || ((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(node))) > (0))));
} else {
return null;
}
});
/**
 * Tests whether node has a result or full-result
 */
instaparse.gll.result_exists_QMARK_ = (function instaparse$gll$result_exists_QMARK_(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5720__auto__ = (function (){var fexpr__22149 = cljs.core.deref(nodes);
return (fexpr__22149.cljs$core$IFn$_invoke$arity$1 ? fexpr__22149.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__22149.call(null,node_key));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return (((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node))) > (0))) || ((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(node))) > (0))));
} else {
return null;
}
});
/**
 * Tests whether node has a full-result
 */
instaparse.gll.full_result_exists_QMARK_ = (function instaparse$gll$full_result_exists_QMARK_(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5720__auto__ = (function (){var fexpr__22150 = cljs.core.deref(nodes);
return (fexpr__22150.cljs$core$IFn$_invoke$arity$1 ? fexpr__22150.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__22150.call(null,node_key));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return (cljs.core.count(cljs.core.deref(cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node))) > (0));
} else {
return null;
}
});
/**
 * Gets node if already exists, otherwise creates one
 */
instaparse.gll.node_get = (function instaparse$gll$node_get(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5718__auto__ = (function (){var fexpr__22151 = cljs.core.deref(nodes);
return (fexpr__22151.cljs$core$IFn$_invoke$arity$1 ? fexpr__22151.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__22151.call(null,node_key));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var node = temp__5718__auto__;
return node;
} else {
var node = instaparse.gll.make_node();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,node_key,node);

return node;
}
});
instaparse.gll.safe_with_meta = (function instaparse$gll$safe_with_meta(obj,metamap){
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj))){
return cljs.core.with_meta(obj,metamap);
} else {
return obj;
}
});
/**
 * Pushes a result into the trampoline's node.
 * Categorizes as either result or full-result.
 * Schedules notification to all existing listeners of result
 * (Full listeners only get notified about full results)
 */
instaparse.gll.push_result = (function instaparse$gll$push_result(tramp,node_key,result){

var node = instaparse.gll.node_get(tramp,node_key);
var parser = (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1)));
var result__$1 = (cljs.core.truth_(cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.cst$kw$result,null):result);
var result__$2 = (function (){var temp__5718__auto__ = cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser);
if(cljs.core.truth_(temp__5718__auto__)){
var reduction_function = temp__5718__auto__;
return instaparse.gll.make_success(instaparse.gll.safe_with_meta(instaparse.reduction.apply_reduction(reduction_function,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(result__$1)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index,(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result__$1)], null)),cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result__$1));
} else {
return result__$1;
}
})();
var total_QMARK_ = instaparse.gll.total_success_QMARK_(tramp,result__$2);
var results = ((total_QMARK_)?cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node):cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.not((function (){var fexpr__22153 = cljs.core.deref(results);
return (fexpr__22153.cljs$core$IFn$_invoke$arity$1 ? fexpr__22153.cljs$core$IFn$_invoke$arity$1(result__$2) : fexpr__22153.call(null,result__$2));
})())){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,result__$2);

var seq__22154_22162 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__22155_22163 = null;
var count__22156_22164 = (0);
var i__22157_22165 = (0);
while(true){
if((i__22157_22165 < count__22156_22164)){
var listener_22166 = chunk__22155_22163.cljs$core$IIndexed$_nth$arity$2(null,i__22157_22165);
instaparse.gll.push_message(tramp,listener_22166,result__$2);


var G__22167 = seq__22154_22162;
var G__22168 = chunk__22155_22163;
var G__22169 = count__22156_22164;
var G__22170 = (i__22157_22165 + (1));
seq__22154_22162 = G__22167;
chunk__22155_22163 = G__22168;
count__22156_22164 = G__22169;
i__22157_22165 = G__22170;
continue;
} else {
var temp__5720__auto___22171 = cljs.core.seq(seq__22154_22162);
if(temp__5720__auto___22171){
var seq__22154_22172__$1 = temp__5720__auto___22171;
if(cljs.core.chunked_seq_QMARK_(seq__22154_22172__$1)){
var c__4550__auto___22173 = cljs.core.chunk_first(seq__22154_22172__$1);
var G__22174 = cljs.core.chunk_rest(seq__22154_22172__$1);
var G__22175 = c__4550__auto___22173;
var G__22176 = cljs.core.count(c__4550__auto___22173);
var G__22177 = (0);
seq__22154_22162 = G__22174;
chunk__22155_22163 = G__22175;
count__22156_22164 = G__22176;
i__22157_22165 = G__22177;
continue;
} else {
var listener_22178 = cljs.core.first(seq__22154_22172__$1);
instaparse.gll.push_message(tramp,listener_22178,result__$2);


var G__22179 = cljs.core.next(seq__22154_22172__$1);
var G__22180 = null;
var G__22181 = (0);
var G__22182 = (0);
seq__22154_22162 = G__22179;
chunk__22155_22163 = G__22180;
count__22156_22164 = G__22181;
i__22157_22165 = G__22182;
continue;
}
} else {
}
}
break;
}

if(total_QMARK_){
var seq__22158 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$full_DASH_listeners.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__22159 = null;
var count__22160 = (0);
var i__22161 = (0);
while(true){
if((i__22161 < count__22160)){
var listener = chunk__22159.cljs$core$IIndexed$_nth$arity$2(null,i__22161);
instaparse.gll.push_message(tramp,listener,result__$2);


var G__22183 = seq__22158;
var G__22184 = chunk__22159;
var G__22185 = count__22160;
var G__22186 = (i__22161 + (1));
seq__22158 = G__22183;
chunk__22159 = G__22184;
count__22160 = G__22185;
i__22161 = G__22186;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__22158);
if(temp__5720__auto__){
var seq__22158__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22158__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__22158__$1);
var G__22187 = cljs.core.chunk_rest(seq__22158__$1);
var G__22188 = c__4550__auto__;
var G__22189 = cljs.core.count(c__4550__auto__);
var G__22190 = (0);
seq__22158 = G__22187;
chunk__22159 = G__22188;
count__22160 = G__22189;
i__22161 = G__22190;
continue;
} else {
var listener = cljs.core.first(seq__22158__$1);
instaparse.gll.push_message(tramp,listener,result__$2);


var G__22191 = cljs.core.next(seq__22158__$1);
var G__22192 = null;
var G__22193 = (0);
var G__22194 = (0);
seq__22158 = G__22191;
chunk__22159 = G__22192;
count__22160 = G__22193;
i__22161 = G__22194;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing results.
 * Initiates parse if necessary
 */
instaparse.gll.push_listener = (function instaparse$gll$push_listener(tramp,node_key,listener){
var listener_already_exists_QMARK_ = instaparse.gll.listener_exists_QMARK_(tramp,node_key);
var node = instaparse.gll.node_get(tramp,node_key);
var listeners = cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(node);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners,cljs.core.conj,listener);

var seq__22195_22203 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__22196_22204 = null;
var count__22197_22205 = (0);
var i__22198_22206 = (0);
while(true){
if((i__22198_22206 < count__22197_22205)){
var result_22207 = chunk__22196_22204.cljs$core$IIndexed$_nth$arity$2(null,i__22198_22206);
instaparse.gll.push_message(tramp,listener,result_22207);


var G__22208 = seq__22195_22203;
var G__22209 = chunk__22196_22204;
var G__22210 = count__22197_22205;
var G__22211 = (i__22198_22206 + (1));
seq__22195_22203 = G__22208;
chunk__22196_22204 = G__22209;
count__22197_22205 = G__22210;
i__22198_22206 = G__22211;
continue;
} else {
var temp__5720__auto___22212 = cljs.core.seq(seq__22195_22203);
if(temp__5720__auto___22212){
var seq__22195_22213__$1 = temp__5720__auto___22212;
if(cljs.core.chunked_seq_QMARK_(seq__22195_22213__$1)){
var c__4550__auto___22214 = cljs.core.chunk_first(seq__22195_22213__$1);
var G__22215 = cljs.core.chunk_rest(seq__22195_22213__$1);
var G__22216 = c__4550__auto___22214;
var G__22217 = cljs.core.count(c__4550__auto___22214);
var G__22218 = (0);
seq__22195_22203 = G__22215;
chunk__22196_22204 = G__22216;
count__22197_22205 = G__22217;
i__22198_22206 = G__22218;
continue;
} else {
var result_22219 = cljs.core.first(seq__22195_22213__$1);
instaparse.gll.push_message(tramp,listener,result_22219);


var G__22220 = cljs.core.next(seq__22195_22213__$1);
var G__22221 = null;
var G__22222 = (0);
var G__22223 = (0);
seq__22195_22203 = G__22220;
chunk__22196_22204 = G__22221;
count__22197_22205 = G__22222;
i__22198_22206 = G__22223;
continue;
}
} else {
}
}
break;
}

var seq__22199_22224 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__22200_22225 = null;
var count__22201_22226 = (0);
var i__22202_22227 = (0);
while(true){
if((i__22202_22227 < count__22201_22226)){
var result_22228 = chunk__22200_22225.cljs$core$IIndexed$_nth$arity$2(null,i__22202_22227);
instaparse.gll.push_message(tramp,listener,result_22228);


var G__22229 = seq__22199_22224;
var G__22230 = chunk__22200_22225;
var G__22231 = count__22201_22226;
var G__22232 = (i__22202_22227 + (1));
seq__22199_22224 = G__22229;
chunk__22200_22225 = G__22230;
count__22201_22226 = G__22231;
i__22202_22227 = G__22232;
continue;
} else {
var temp__5720__auto___22233 = cljs.core.seq(seq__22199_22224);
if(temp__5720__auto___22233){
var seq__22199_22234__$1 = temp__5720__auto___22233;
if(cljs.core.chunked_seq_QMARK_(seq__22199_22234__$1)){
var c__4550__auto___22235 = cljs.core.chunk_first(seq__22199_22234__$1);
var G__22236 = cljs.core.chunk_rest(seq__22199_22234__$1);
var G__22237 = c__4550__auto___22235;
var G__22238 = cljs.core.count(c__4550__auto___22235);
var G__22239 = (0);
seq__22199_22224 = G__22236;
chunk__22200_22225 = G__22237;
count__22201_22226 = G__22238;
i__22202_22227 = G__22239;
continue;
} else {
var result_22240 = cljs.core.first(seq__22199_22234__$1);
instaparse.gll.push_message(tramp,listener,result_22240);


var G__22241 = cljs.core.next(seq__22199_22234__$1);
var G__22242 = null;
var G__22243 = (0);
var G__22244 = (0);
seq__22199_22224 = G__22241;
chunk__22200_22225 = G__22242;
count__22201_22226 = G__22243;
i__22202_22227 = G__22244;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(listener_already_exists_QMARK_)){
return instaparse.gll.push_stack(tramp,((function (listener_already_exists_QMARK_,node,listeners){
return (function (){
return instaparse.gll._parse((node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1))),(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),tramp);
});})(listener_already_exists_QMARK_,node,listeners))
);
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing full results.
 */
instaparse.gll.push_full_listener = (function instaparse$gll$push_full_listener(tramp,node_key,listener){
var full_listener_already_exists_QMARK_ = instaparse.gll.full_listener_exists_QMARK_(tramp,node_key);
var node = instaparse.gll.node_get(tramp,node_key);
var listeners = cljs.core.cst$kw$full_DASH_listeners.cljs$core$IFn$_invoke$arity$1(node);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners,cljs.core.conj,listener);

var seq__22245_22249 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__22246_22250 = null;
var count__22247_22251 = (0);
var i__22248_22252 = (0);
while(true){
if((i__22248_22252 < count__22247_22251)){
var result_22253 = chunk__22246_22250.cljs$core$IIndexed$_nth$arity$2(null,i__22248_22252);
instaparse.gll.push_message(tramp,listener,result_22253);


var G__22254 = seq__22245_22249;
var G__22255 = chunk__22246_22250;
var G__22256 = count__22247_22251;
var G__22257 = (i__22248_22252 + (1));
seq__22245_22249 = G__22254;
chunk__22246_22250 = G__22255;
count__22247_22251 = G__22256;
i__22248_22252 = G__22257;
continue;
} else {
var temp__5720__auto___22258 = cljs.core.seq(seq__22245_22249);
if(temp__5720__auto___22258){
var seq__22245_22259__$1 = temp__5720__auto___22258;
if(cljs.core.chunked_seq_QMARK_(seq__22245_22259__$1)){
var c__4550__auto___22260 = cljs.core.chunk_first(seq__22245_22259__$1);
var G__22261 = cljs.core.chunk_rest(seq__22245_22259__$1);
var G__22262 = c__4550__auto___22260;
var G__22263 = cljs.core.count(c__4550__auto___22260);
var G__22264 = (0);
seq__22245_22249 = G__22261;
chunk__22246_22250 = G__22262;
count__22247_22251 = G__22263;
i__22248_22252 = G__22264;
continue;
} else {
var result_22265 = cljs.core.first(seq__22245_22259__$1);
instaparse.gll.push_message(tramp,listener,result_22265);


var G__22266 = cljs.core.next(seq__22245_22259__$1);
var G__22267 = null;
var G__22268 = (0);
var G__22269 = (0);
seq__22245_22249 = G__22266;
chunk__22246_22250 = G__22267;
count__22247_22251 = G__22268;
i__22248_22252 = G__22269;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(full_listener_already_exists_QMARK_)){
return instaparse.gll.push_stack(tramp,((function (full_listener_already_exists_QMARK_,node,listeners){
return (function (){
return instaparse.gll._full_parse((node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1))),(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),tramp);
});})(full_listener_already_exists_QMARK_,node,listeners))
);
} else {
return null;
}
});
instaparse.gll.merge_negative_listeners = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.into);
/**
 * Pushes a thunk onto the trampoline's negative-listener stack.
 */
instaparse.gll.push_negative_listener = (function instaparse$gll$push_negative_listener(tramp,creator,negative_listener){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp),instaparse.gll.merge_negative_listeners,cljs.core.PersistentArrayMap.createAsIfByAssoc([(creator.cljs$core$IFn$_invoke$arity$1 ? creator.cljs$core$IFn$_invoke$arity$1((0)) : creator.call(null,(0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negative_listener], null)]));
});
instaparse.gll.fail = (function instaparse$gll$fail(tramp,node_key,index,reason){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(tramp),(function (failure){
var current_index = cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(failure);
var G__22270 = cljs.core.compare(index,current_index);
switch (G__22270) {
case (1):
return (new instaparse.gll.Failure(index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reason], null),null,null,null));

break;
case (0):
return (new instaparse.gll.Failure(index,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(failure),reason),null,null,null));

break;
case (-1):
return failure;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22270)].join('')));

}
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.cst$kw$fail_DASH_index.cljs$core$IFn$_invoke$arity$1(tramp))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success((function (){var G__22271 = cljs.core.cst$kw$node_DASH_builder.cljs$core$IFn$_invoke$arity$1(tramp);
var G__22272 = cljs.core.cst$kw$instaparse_SLASH_failure;
var G__22273 = (function (){var G__22276 = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var G__22277 = index;
return (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(G__22276,G__22277) : instaparse.gll.sub_sequence.call(null,G__22276,G__22277));
})();
var G__22274 = index;
var G__22275 = cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp));
return (instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5(G__22271,G__22272,G__22273,G__22274,G__22275) : instaparse.gll.build_node_with_meta.call(null,G__22271,G__22272,G__22273,G__22274,G__22275));
})(),cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp))));
} else {
return null;
}
});
/**
 * Executes one thing on the stack (not threadsafe)
 */
instaparse.gll.step = (function instaparse$gll$step(stack){
var top = cljs.core.peek(cljs.core.deref(stack));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.pop);

return (top.cljs$core$IFn$_invoke$arity$0 ? top.cljs$core$IFn$_invoke$arity$0() : top.call(null));
});
/**
 * Executes the stack until exhausted
 */
instaparse.gll.run = (function instaparse$gll$run(var_args){
var G__22280 = arguments.length;
switch (G__22280) {
case 1:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.gll.run.cljs$core$IFn$_invoke$arity$1 = (function (tramp){
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2(tramp,null);
});

instaparse.gll.run.cljs$core$IFn$_invoke$arity$2 = (function (tramp,found_result_QMARK_){
while(true){
var stack = cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(cljs.core.deref(cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(tramp)))){

return cljs.core.cons(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(tramp))),(new cljs.core.LazySeq(null,((function (tramp,found_result_QMARK_,stack){
return (function (){
cljs.core.reset_BANG_(cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(tramp),null);

return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2(tramp,true);
});})(tramp,found_result_QMARK_,stack))
,null,null)));
} else {
if((cljs.core.count(cljs.core.deref(stack)) > (0))){
instaparse.gll.step(stack);

var G__22285 = tramp;
var G__22286 = found_result_QMARK_;
tramp = G__22285;
found_result_QMARK_ = G__22286;
continue;
} else {
if((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp))) > (0))){
var vec__22281 = cljs.core.first(cljs.core.deref(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp)));
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22281,(0),null);
var listeners = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22281,(1),null);
var listener = cljs.core.peek(listeners);

(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(listeners),(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.dissoc,index);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null),cljs.core.pop);
}

var G__22287 = tramp;
var G__22288 = found_result_QMARK_;
tramp = G__22287;
found_result_QMARK_ = G__22288;
continue;
} else {
if(cljs.core.truth_(found_result_QMARK_)){
var next_stack = cljs.core.cst$kw$next_DASH_stack.cljs$core$IFn$_invoke$arity$1(tramp);
cljs.core.reset_BANG_(stack,cljs.core.deref(next_stack));

cljs.core.reset_BANG_(next_stack,cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$generation.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.inc);

var G__22289 = tramp;
var G__22290 = null;
tramp = G__22289;
found_result_QMARK_ = G__22290;
continue;
} else {
return null;

}
}
}
}
break;
}
});

instaparse.gll.run.cljs$lang$maxFixedArity = 2;

instaparse.gll.NodeListener = (function instaparse$gll$NodeListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result(tramp,node_key,result);
});
});
instaparse.gll.LookListener = (function instaparse$gll$LookListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0)))));
});
});
instaparse.gll.CatListener = (function instaparse$gll$CatListener(results_so_far,parser_sequence,node_key,tramp){

return (function (result){
var map__22291 = result;
var map__22291__$1 = (((((!((map__22291 == null))))?(((((map__22291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22291):map__22291);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22291__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22291__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core.seq(parser_sequence)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__22293 = new_results_so_far;
var G__22294 = cljs.core.next(parser_sequence);
var G__22295 = node_key;
var G__22296 = tramp;
return (instaparse.gll.CatListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatListener.cljs$core$IFn$_invoke$arity$4(G__22293,G__22294,G__22295,G__22296) : instaparse.gll.CatListener.call(null,G__22293,G__22294,G__22295,G__22296));
})());
} else {
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.CatFullListener = (function instaparse$gll$CatFullListener(results_so_far,parser_sequence,node_key,tramp){
return (function (result){
var map__22297 = result;
var map__22297__$1 = (((((!((map__22297 == null))))?(((((map__22297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22297):map__22297);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(instaparse.reduction.singleton_QMARK_(parser_sequence)){
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__22299 = new_results_so_far;
var G__22300 = cljs.core.next(parser_sequence);
var G__22301 = node_key;
var G__22302 = tramp;
return (instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4(G__22299,G__22300,G__22301,G__22302) : instaparse.gll.CatFullListener.call(null,G__22299,G__22300,G__22301,G__22302));
})());
} else {
if(cljs.core.seq(parser_sequence)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__22303 = new_results_so_far;
var G__22304 = cljs.core.next(parser_sequence);
var G__22305 = node_key;
var G__22306 = tramp;
return (instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4(G__22303,G__22304,G__22305,G__22306) : instaparse.gll.CatFullListener.call(null,G__22303,G__22304,G__22305,G__22306));
})());
} else {
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));

}
}
});
});
instaparse.gll.PlusListener = (function instaparse$gll$PlusListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__22307 = result;
var map__22307__$1 = (((((!((map__22307 == null))))?(((((map__22307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22307):map__22307);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22307__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22307__$1,cljs.core.cst$kw$index);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index)){
if((cljs.core.count(results_so_far) === (0))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.PlusListener.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.PlusListener.cljs$core$IFn$_invoke$arity$5(new_results_so_far,parser,continue_index,node_key,tramp) : instaparse.gll.PlusListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp)));

return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.PlusFullListener = (function instaparse$gll$PlusFullListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__22309 = result;
var map__22309__$1 = (((((!((map__22309 == null))))?(((((map__22309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22309):map__22309);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22309__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22309__$1,cljs.core.cst$kw$index);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index)){
if((cljs.core.count(results_so_far) === (0))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.PlusFullListener.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.PlusFullListener.cljs$core$IFn$_invoke$arity$5(new_results_so_far,parser,continue_index,node_key,tramp) : instaparse.gll.PlusFullListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp)));
}
}
});
});
instaparse.gll.RepListener = (function instaparse$gll$RepListener(results_so_far,n_results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__22311 = result;
var map__22311__$1 = (((((!((map__22311 == null))))?(((((map__22311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22311):map__22311);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22311__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22311__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
var new_n_results_so_far = (n_results_so_far + (1));
if((((m <= new_n_results_so_far)) && ((new_n_results_so_far <= n)))){
instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
}

if((new_n_results_so_far < n)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.RepListener.cljs$core$IFn$_invoke$arity$8 ? instaparse.gll.RepListener.cljs$core$IFn$_invoke$arity$8(new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp) : instaparse.gll.RepListener.call(null,new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp)));
} else {
return null;
}
});
});
instaparse.gll.RepFullListener = (function instaparse$gll$RepFullListener(results_so_far,n_results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__22313 = result;
var map__22313__$1 = (((((!((map__22313 == null))))?(((((map__22313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22313):map__22313);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22313__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22313__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
var new_n_results_so_far = (n_results_so_far + (1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
if((((m <= new_n_results_so_far)) && ((new_n_results_so_far <= n)))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
return null;
}
} else {
if((new_n_results_so_far < n)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.RepFullListener.cljs$core$IFn$_invoke$arity$8 ? instaparse.gll.RepFullListener.cljs$core$IFn$_invoke$arity$8(new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp) : instaparse.gll.RepFullListener.call(null,new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp)));
} else {
return null;
}
}
});
});
instaparse.gll.TopListener = (function instaparse$gll$TopListener(tramp){
return (function (result){
return cljs.core.reset_BANG_(cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(tramp),result);
});
});
instaparse.gll.string_parse = (function instaparse$gll$string_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4222__auto__ = cljs.core.count(text);
var y__4223__auto__ = (index + cljs.core.count(string));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,head)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string], null));
}
});
instaparse.gll.string_full_parse = (function instaparse$gll$string_full_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4222__auto__ = cljs.core.count(text);
var y__4223__auto__ = (index + cljs.core.count(string));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(text))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,head)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string,cljs.core.cst$kw$full,true], null));
}
});
instaparse.gll.equals_ignore_case = (function instaparse$gll$equals_ignore_case(s1,s2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1.toUpperCase(),s2.toUpperCase());
});
instaparse.gll.string_case_insensitive_parse = (function instaparse$gll$string_case_insensitive_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4222__auto__ = cljs.core.count(text);
var y__4223__auto__ = (index + cljs.core.count(string));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(instaparse.gll.equals_ignore_case(string,head)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string], null));
}
});
instaparse.gll.string_case_insensitive_full_parse = (function instaparse$gll$string_case_insensitive_full_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4222__auto__ = cljs.core.count(text);
var y__4223__auto__ = (index + cljs.core.count(string));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(text))) && (instaparse.gll.equals_ignore_case(string,head)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string,cljs.core.cst$kw$full,true], null));
}
});
instaparse.gll.single_char_code_at = (function instaparse$gll$single_char_code_at(text,index){
return text.charCodeAt(index);
});
instaparse.gll.unicode_code_point_at = (function instaparse$gll$unicode_code_point_at(text,index){
var G__22315 = text;
var G__22316 = (index | (0));
return goog.i18n.uChar.getCodePointAround(G__22315,G__22316);
});
instaparse.gll.code_point__GT_chars = (function instaparse$gll$code_point__GT_chars(code_point){
return goog.i18n.uChar.fromCharCode(code_point);
});
instaparse.gll.char_range_parse = (function instaparse$gll$char_range_parse(this$,index,tramp){
var lo = cljs.core.cst$kw$lo.cljs$core$IFn$_invoke$arity$1(this$);
var hi = cljs.core.cst$kw$hi.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
if((index >= cljs.core.count(text))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
} else {
if((hi <= (65535))){
var code = instaparse.gll.single_char_code_at(text,index);
if((((lo <= code)) && ((code <= hi)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(code)),(index + (1))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
}
} else {
var code_point = instaparse.gll.unicode_code_point_at(text,index);
var char_string = instaparse.gll.code_point__GT_chars(code_point);
if((((lo <= code_point)) && ((code_point <= hi)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(char_string,(index + cljs.core.count(char_string))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
}

}
}
});
instaparse.gll.char_range_full_parse = (function instaparse$gll$char_range_full_parse(this$,index,tramp){
var lo = cljs.core.cst$kw$lo.cljs$core$IFn$_invoke$arity$1(this$);
var hi = cljs.core.cst$kw$hi.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = cljs.core.count(text);
if((index >= cljs.core.count(text))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
} else {
if((hi <= (65535))){
var code = instaparse.gll.single_char_code_at(text,index);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + (1)),end)) && ((((lo <= code)) && ((code <= hi)))))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(code)),end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
}
} else {
var code_point = instaparse.gll.unicode_code_point_at(text,index);
var char_string = instaparse.gll.code_point__GT_chars(code_point);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + cljs.core.count(char_string)),end)) && ((((lo <= code_point)) && ((code_point <= hi)))))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(char_string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null),cljs.core.cst$kw$full,true], null));
}

}
}
});
instaparse.gll.re_match_at_front = (function instaparse$gll$re_match_at_front(regexp,text){
var re = (new RegExp(regexp.source,["g",instaparse.util.regexp_flags(regexp)].join('')));
var m = re.exec(text);
if(cljs.core.truth_((function (){var and__4120__auto__ = m;
if(cljs.core.truth_(and__4120__auto__)){
return (m.index === (0));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.first(m);
} else {
return null;
}
});
instaparse.gll.regexp_parse = (function instaparse$gll$regexp_parse(this$,index,tramp){
var regexp = cljs.core.cst$kw$regexp.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$segment.cljs$core$IFn$_invoke$arity$1(tramp);
var substring = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(text,index) : instaparse.gll.sub_sequence.call(null,text,index));
var match = instaparse.gll.re_match_at_front(regexp,substring);
if(cljs.core.truth_(match)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(match,(index + cljs.core.count(match))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$regexp,cljs.core.cst$kw$expecting,regexp], null));
}
});
instaparse.gll.regexp_full_parse = (function instaparse$gll$regexp_full_parse(this$,index,tramp){
var regexp = cljs.core.cst$kw$regexp.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$segment.cljs$core$IFn$_invoke$arity$1(tramp);
var substring = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(text,index) : instaparse.gll.sub_sequence.call(null,text,index));
var match = instaparse.gll.re_match_at_front(regexp,substring);
var desired_length = (cljs.core.count(text) - index);
if(cljs.core.truth_((function (){var and__4120__auto__ = match;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(match),desired_length);
} else {
return and__4120__auto__;
}
})())){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(match,cljs.core.count(text)));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$regexp,cljs.core.cst$kw$expecting,regexp,cljs.core.cst$kw$full,true], null));
}
});
instaparse.gll.cat_parse = (function instaparse$gll$cat_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatListener(instaparse.auto_flatten_seq.EMPTY,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.cat_full_parse = (function instaparse$gll$cat_full_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatFullListener(instaparse.auto_flatten_seq.EMPTY,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.plus_parse = (function instaparse$gll$plus_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.plus_full_parse = (function instaparse$gll$plus_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.rep_parse = (function instaparse$gll$rep_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
var m = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(this$);
var n = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));

if((n >= (1))){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.rep_full_parse = (function instaparse$gll$rep_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
var m = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(this$);
var n = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));

if((n >= (1))){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.star_parse = (function instaparse$gll$star_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.star_full_parse = (function instaparse$gll$star_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.alt_parse = (function instaparse$gll$alt_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
var seq__22317 = cljs.core.seq(parsers);
var chunk__22318 = null;
var count__22319 = (0);
var i__22320 = (0);
while(true){
if((i__22320 < count__22319)){
var parser = chunk__22318.cljs$core$IIndexed$_nth$arity$2(null,i__22320);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__22321 = seq__22317;
var G__22322 = chunk__22318;
var G__22323 = count__22319;
var G__22324 = (i__22320 + (1));
seq__22317 = G__22321;
chunk__22318 = G__22322;
count__22319 = G__22323;
i__22320 = G__22324;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__22317);
if(temp__5720__auto__){
var seq__22317__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22317__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__22317__$1);
var G__22325 = cljs.core.chunk_rest(seq__22317__$1);
var G__22326 = c__4550__auto__;
var G__22327 = cljs.core.count(c__4550__auto__);
var G__22328 = (0);
seq__22317 = G__22325;
chunk__22318 = G__22326;
count__22319 = G__22327;
i__22320 = G__22328;
continue;
} else {
var parser = cljs.core.first(seq__22317__$1);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__22329 = cljs.core.next(seq__22317__$1);
var G__22330 = null;
var G__22331 = (0);
var G__22332 = (0);
seq__22317 = G__22329;
chunk__22318 = G__22330;
count__22319 = G__22331;
i__22320 = G__22332;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.alt_full_parse = (function instaparse$gll$alt_full_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
var seq__22333 = cljs.core.seq(parsers);
var chunk__22334 = null;
var count__22335 = (0);
var i__22336 = (0);
while(true){
if((i__22336 < count__22335)){
var parser = chunk__22334.cljs$core$IIndexed$_nth$arity$2(null,i__22336);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__22337 = seq__22333;
var G__22338 = chunk__22334;
var G__22339 = count__22335;
var G__22340 = (i__22336 + (1));
seq__22333 = G__22337;
chunk__22334 = G__22338;
count__22335 = G__22339;
i__22336 = G__22340;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__22333);
if(temp__5720__auto__){
var seq__22333__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22333__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__22333__$1);
var G__22341 = cljs.core.chunk_rest(seq__22333__$1);
var G__22342 = c__4550__auto__;
var G__22343 = cljs.core.count(c__4550__auto__);
var G__22344 = (0);
seq__22333 = G__22341;
chunk__22334 = G__22342;
count__22335 = G__22343;
i__22336 = G__22344;
continue;
} else {
var parser = cljs.core.first(seq__22333__$1);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__22345 = cljs.core.next(seq__22333__$1);
var G__22346 = null;
var G__22347 = (0);
var G__22348 = (0);
seq__22333 = G__22345;
chunk__22334 = G__22346;
count__22335 = G__22347;
i__22336 = G__22348;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.ordered_alt_parse = (function instaparse$gll$ordered_alt_parse(this$,index,tramp){
var parser1 = cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_listener(tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener(tramp,node_key_parser1,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){
return instaparse.gll.push_listener(tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.ordered_alt_full_parse = (function instaparse$gll$ordered_alt_full_parse(this$,index,tramp){
var parser1 = cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_full_listener(tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener(tramp,node_key_parser1,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){
return instaparse.gll.push_full_listener(tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.opt_parse = (function instaparse$gll$opt_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.opt_full_parse = (function instaparse$gll$opt_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$optional,cljs.core.cst$kw$expecting,cljs.core.cst$kw$end_DASH_of_DASH_string], null));
}
});
instaparse.gll.non_terminal_parse = (function instaparse$gll$non_terminal_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.cst$kw$keyword.cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.non_terminal_full_parse = (function instaparse$gll$non_terminal_full_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.cst$kw$keyword.cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_parse = (function instaparse$gll$lookahead_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.LookListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_full_parse = (function instaparse$gll$lookahead_full_parse(this$,index,tramp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.lookahead_parse(this$,index,tramp);
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$lookahead,cljs.core.cst$kw$expecting,cljs.core.cst$kw$end_DASH_of_DASH_string], null));
}
});
instaparse.gll.negative_lookahead_parse = (function instaparse$gll$negative_lookahead_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
var node_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null);
if(cljs.core.truth_(instaparse.gll.result_exists_QMARK_(tramp,node_key))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$kw$negative_DASH_lookahead], null));
} else {
instaparse.gll.push_listener(tramp,node_key,(function (){var fail_send = (new cljs.core.Delay(((function (parser,node_key){
return (function (){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$negative_DASH_lookahead,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$NOT,instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser)], null)], null));
});})(parser,node_key))
,null));
return ((function (fail_send,parser,node_key){
return (function (result){
return cljs.core.force(fail_send);
});
;})(fail_send,parser,node_key))
})());

return instaparse.gll.push_negative_listener(tramp,node_key,((function (parser,node_key){
return (function (){
if(cljs.core.not(instaparse.gll.result_exists_QMARK_(tramp,node_key))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return null;
}
});})(parser,node_key))
);
}
});
instaparse.gll.epsilon_parse = (function instaparse$gll$epsilon_parse(this$,index,tramp){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.epsilon_full_parse = (function instaparse$gll$epsilon_full_parse(this$,index,tramp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$Epsilon,cljs.core.cst$kw$expecting,cljs.core.cst$kw$end_DASH_of_DASH_string], null));
}
});
instaparse.gll.start_parser = (function instaparse$gll$start_parser(tramp,parser,partial_QMARK_){
if(cljs.core.truth_(partial_QMARK_)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener(tramp));
} else {
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener(tramp));
}
});
instaparse.gll.parses = (function instaparse$gll$parses(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(grammar,text);
var parser = instaparse.combinators_source.nt(start);
instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__5718__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__5718__auto__)){
var all_parses = temp__5718__auto__;
return all_parses;
} else {
return cljs.core.with_meta(cljs.core.List.EMPTY,instaparse.failure.augment_failure(cljs.core.deref(cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(tramp)),text));
}
});
instaparse.gll.parse = (function instaparse$gll$parse(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(grammar,text);
var parser = instaparse.combinators_source.nt(start);
instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__5718__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__5718__auto__)){
var all_parses = temp__5718__auto__;
return cljs.core.first(all_parses);
} else {
return instaparse.failure.augment_failure(cljs.core.deref(cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(tramp)),text);
}
});
instaparse.gll.build_node_with_meta = (function instaparse$gll$build_node_with_meta(node_builder,tag,content,start,end){
return cljs.core.with_meta((node_builder.cljs$core$IFn$_invoke$arity$2 ? node_builder.cljs$core$IFn$_invoke$arity$2(tag,content) : node_builder.call(null,tag,content)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index,start,cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index,end], null));
});
instaparse.gll.build_total_failure_node = (function instaparse$gll$build_total_failure_node(node_builder,start,text){
var build_failure_node = instaparse.gll.build_node_with_meta(node_builder,cljs.core.cst$kw$instaparse_SLASH_failure,text,(0),cljs.core.count(text));
var build_start_node = instaparse.gll.build_node_with_meta(node_builder,start,build_failure_node,(0),cljs.core.count(text));
return build_start_node;
});
instaparse.gll.parses_total_after_fail = (function instaparse$gll$parses_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){
var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt(start);

instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__5718__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__5718__auto__)){
var all_parses = temp__5718__auto__;
return all_parses;
} else {
return (new cljs.core.List(null,instaparse.gll.build_total_failure_node(node_builder,start,text),null,(1),null));
}
});
/**
 * A variation on with-meta that merges the existing metamap into the new metamap,
 * rather than overwriting the metamap entirely.
 */
instaparse.gll.merge_meta = (function instaparse$gll$merge_meta(obj,metamap){
return cljs.core.with_meta(obj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metamap,cljs.core.meta(obj)], 0)));
});
instaparse.gll.parses_total = (function instaparse$gll$parses_total(grammar,start,text,partial_QMARK_,node_builder){

var all_parses = instaparse.gll.parses(grammar,start,text,partial_QMARK_);
if(cljs.core.seq(all_parses)){
return all_parses;
} else {
return instaparse.gll.merge_meta(instaparse.gll.parses_total_after_fail(grammar,start,text,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(all_parses)),partial_QMARK_,node_builder),cljs.core.meta(all_parses));
}
});
instaparse.gll.parse_total_after_fail = (function instaparse$gll$parse_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){
var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt(start);

instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__5718__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__5718__auto__)){
var all_parses = temp__5718__auto__;
return cljs.core.first(all_parses);
} else {
return instaparse.gll.build_total_failure_node(node_builder,start,text);
}
});
instaparse.gll.parse_total = (function instaparse$gll$parse_total(grammar,start,text,partial_QMARK_,node_builder){

var result = instaparse.gll.parse(grammar,start,text,partial_QMARK_);
if((!((result instanceof instaparse.gll.Failure)))){
return result;
} else {
return instaparse.gll.merge_meta(instaparse.gll.parse_total_after_fail(grammar,start,text,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result),partial_QMARK_,node_builder),result);
}
});
