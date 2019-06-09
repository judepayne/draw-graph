// Compiled by ClojureScript 1.10.520 {}
goog.provide('instaparse.gll');
goog.require('cljs.core');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.failure');
goog.require('instaparse.reduction');
goog.require('instaparse.combinators_source');
goog.require('instaparse.print');
goog.require('instaparse.util');
goog.require('goog.i18n.uChar');
instaparse.gll._STAR_diagnostic_char_lookahead_STAR_ = (10);

instaparse.gll.get_parser = (function instaparse$gll$get_parser(grammar,p){
return cljs.core.get.call(null,grammar,p,p);
});














instaparse.gll._parse = (function instaparse$gll$_parse(parser,index,tramp){

var G__18789 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__18789__$1 = (((G__18789 instanceof cljs.core.Keyword))?G__18789.fqn:null);
switch (G__18789__$1) {
case "nt":
return instaparse.gll.non_terminal_parse.call(null,parser,index,tramp);

break;
case "alt":
return instaparse.gll.alt_parse.call(null,parser,index,tramp);

break;
case "cat":
return instaparse.gll.cat_parse.call(null,parser,index,tramp);

break;
case "string":
return instaparse.gll.string_parse.call(null,parser,index,tramp);

break;
case "string-ci":
return instaparse.gll.string_case_insensitive_parse.call(null,parser,index,tramp);

break;
case "char":
return instaparse.gll.char_range_parse.call(null,parser,index,tramp);

break;
case "epsilon":
return instaparse.gll.epsilon_parse.call(null,parser,index,tramp);

break;
case "opt":
return instaparse.gll.opt_parse.call(null,parser,index,tramp);

break;
case "plus":
return instaparse.gll.plus_parse.call(null,parser,index,tramp);

break;
case "rep":
return instaparse.gll.rep_parse.call(null,parser,index,tramp);

break;
case "star":
return instaparse.gll.star_parse.call(null,parser,index,tramp);

break;
case "regexp":
return instaparse.gll.regexp_parse.call(null,parser,index,tramp);

break;
case "look":
return instaparse.gll.lookahead_parse.call(null,parser,index,tramp);

break;
case "neg":
return instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp);

break;
case "ord":
return instaparse.gll.ordered_alt_parse.call(null,parser,index,tramp);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18789__$1)].join('')));

}
});













instaparse.gll._full_parse = (function instaparse$gll$_full_parse(parser,index,tramp){

var G__18791 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__18791__$1 = (((G__18791 instanceof cljs.core.Keyword))?G__18791.fqn:null);
switch (G__18791__$1) {
case "nt":
return instaparse.gll.non_terminal_full_parse.call(null,parser,index,tramp);

break;
case "alt":
return instaparse.gll.alt_full_parse.call(null,parser,index,tramp);

break;
case "cat":
return instaparse.gll.cat_full_parse.call(null,parser,index,tramp);

break;
case "string":
return instaparse.gll.string_full_parse.call(null,parser,index,tramp);

break;
case "string-ci":
return instaparse.gll.string_case_insensitive_full_parse.call(null,parser,index,tramp);

break;
case "char":
return instaparse.gll.char_range_full_parse.call(null,parser,index,tramp);

break;
case "epsilon":
return instaparse.gll.epsilon_full_parse.call(null,parser,index,tramp);

break;
case "opt":
return instaparse.gll.opt_full_parse.call(null,parser,index,tramp);

break;
case "plus":
return instaparse.gll.plus_full_parse.call(null,parser,index,tramp);

break;
case "rep":
return instaparse.gll.rep_full_parse.call(null,parser,index,tramp);

break;
case "star":
return instaparse.gll.star_full_parse.call(null,parser,index,tramp);

break;
case "regexp":
return instaparse.gll.regexp_full_parse.call(null,parser,index,tramp);

break;
case "look":
return instaparse.gll.lookahead_full_parse.call(null,parser,index,tramp);

break;
case "neg":
return instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp);

break;
case "ord":
return instaparse.gll.ordered_alt_full_parse.call(null,parser,index,tramp);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18791__$1)].join('')));

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

instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k18794,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__18798 = k18794;
var G__18798__$1 = (((G__18798 instanceof cljs.core.Keyword))?G__18798.fqn:null);
switch (G__18798__$1) {
case "index":
return self__.index;

break;
case "reason":
return self__.reason;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18794,else__4388__auto__);

}
});

instaparse.gll.Failure.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__18799){
var vec__18800 = p__18799;
var k__4408__auto__ = cljs.core.nth.call(null,vec__18800,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__18800,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#instaparse.gll.Failure{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason],null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18793){
var self__ = this;
var G__18793__$1 = this;
return (new cljs.core.RecordIter((0),G__18793__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"reason","reason",-2070751759)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (2 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1140991288 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

instaparse.gll.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18795,other18796){
var self__ = this;
var this18795__$1 = this;
return (((!((other18796 == null)))) && ((this18795__$1.constructor === other18796.constructor)) && (cljs.core._EQ_.call(null,this18795__$1.index,other18796.index)) && (cljs.core._EQ_.call(null,this18795__$1.reason,other18796.reason)) && (cljs.core._EQ_.call(null,this18795__$1.__extmap,other18796.__extmap)));
});

instaparse.gll.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__18793){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__18803 = cljs.core.keyword_identical_QMARK_;
var expr__18804 = k__4393__auto__;
if(cljs.core.truth_(pred__18803.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__18804))){
return (new instaparse.gll.Failure(G__18793,self__.reason,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18803.call(null,new cljs.core.Keyword(null,"reason","reason",-2070751759),expr__18804))){
return (new instaparse.gll.Failure(self__.index,G__18793,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__18793),null));
}
}
});

instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"index","index",-1531685915),self__.index,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason,null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__18793){
var self__ = this;
var this__4384__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,G__18793,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

instaparse.gll.Failure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"reason","reason",-430220232,null)], null);
});

instaparse.gll.Failure.cljs$lang$type = true;

instaparse.gll.Failure.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"instaparse.gll/Failure",null,(1),null));
});

instaparse.gll.Failure.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"instaparse.gll/Failure");
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
instaparse.gll.map__GT_Failure = (function instaparse$gll$map__GT_Failure(G__18797){
var extmap__4424__auto__ = (function (){var G__18806 = cljs.core.dissoc.call(null,G__18797,new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"reason","reason",-2070751759));
if(cljs.core.record_QMARK_.call(null,G__18797)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__18806);
} else {
return G__18806;
}
})();
return (new instaparse.gll.Failure(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__18797),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(G__18797),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (fail,writer,_){
var fail__$1 = this;
return cljs.core._write.call(null,writer,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18808_18812 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18809_18813 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18810_18814 = true;
var _STAR_print_fn_STAR__temp_val__18811_18815 = ((function (_STAR_print_newline_STAR__orig_val__18808_18812,_STAR_print_fn_STAR__orig_val__18809_18813,_STAR_print_newline_STAR__temp_val__18810_18814,sb__4661__auto__,fail__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18808_18812,_STAR_print_fn_STAR__orig_val__18809_18813,_STAR_print_newline_STAR__temp_val__18810_18814,sb__4661__auto__,fail__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18810_18814;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18811_18815;

try{instaparse.failure.pprint_failure.call(null,fail__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18809_18813;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18808_18812;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
});
instaparse.gll.failure_type = cljs.core.type.call(null,(new instaparse.gll.Failure(null,null,null,null,null)));
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

instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k18817,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__18821 = k18817;
var G__18821__$1 = (((G__18821 instanceof cljs.core.Keyword))?G__18821.fqn:null);
switch (G__18821__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k18817,else__4388__auto__);

}
});

instaparse.gll.Tramp.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__18822){
var vec__18823 = p__18822;
var k__4408__auto__ = cljs.core.nth.call(null,vec__18823,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__18823,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

instaparse.gll.Tramp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#instaparse.gll.Tramp{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"success","success",1890645906),self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trace?","trace?",1730690679),self__.trace_QMARK_],null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18816){
var self__ = this;
var G__18816__$1 = this;
return (new cljs.core.RecordIter((0),G__18816__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"fail-index","fail-index",248726923),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"trace?","trace?",1730690679)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (14 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (166878148 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

instaparse.gll.Tramp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18818,other18819){
var self__ = this;
var this18818__$1 = this;
return (((!((other18819 == null)))) && ((this18818__$1.constructor === other18819.constructor)) && (cljs.core._EQ_.call(null,this18818__$1.grammar,other18819.grammar)) && (cljs.core._EQ_.call(null,this18818__$1.text,other18819.text)) && (cljs.core._EQ_.call(null,this18818__$1.segment,other18819.segment)) && (cljs.core._EQ_.call(null,this18818__$1.fail_index,other18819.fail_index)) && (cljs.core._EQ_.call(null,this18818__$1.node_builder,other18819.node_builder)) && (cljs.core._EQ_.call(null,this18818__$1.stack,other18819.stack)) && (cljs.core._EQ_.call(null,this18818__$1.next_stack,other18819.next_stack)) && (cljs.core._EQ_.call(null,this18818__$1.generation,other18819.generation)) && (cljs.core._EQ_.call(null,this18818__$1.negative_listeners,other18819.negative_listeners)) && (cljs.core._EQ_.call(null,this18818__$1.msg_cache,other18819.msg_cache)) && (cljs.core._EQ_.call(null,this18818__$1.nodes,other18819.nodes)) && (cljs.core._EQ_.call(null,this18818__$1.success,other18819.success)) && (cljs.core._EQ_.call(null,this18818__$1.failure,other18819.failure)) && (cljs.core._EQ_.call(null,this18818__$1.trace_QMARK_,other18819.trace_QMARK_)) && (cljs.core._EQ_.call(null,this18818__$1.__extmap,other18819.__extmap)));
});

instaparse.gll.Tramp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),null,new cljs.core.Keyword(null,"generation","generation",-2132542044),null,new cljs.core.Keyword(null,"failure","failure",720415879),null,new cljs.core.Keyword(null,"fail-index","fail-index",248726923),null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),null,new cljs.core.Keyword(null,"success","success",1890645906),null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),null,new cljs.core.Keyword(null,"segment","segment",-964921196),null,new cljs.core.Keyword(null,"stack","stack",-793405930),null,new cljs.core.Keyword(null,"trace?","trace?",1730690679),null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__18816){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__18826 = cljs.core.keyword_identical_QMARK_;
var expr__18827 = k__4393__auto__;
if(cljs.core.truth_(pred__18826.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),expr__18827))){
return (new instaparse.gll.Tramp(G__18816,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18826.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__18827))){
return (new instaparse.gll.Tramp(self__.grammar,G__18816,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18826.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196),expr__18827))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__18816,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18826.call(null,new cljs.core.Keyword(null,"fail-index","fail-index",248726923),expr__18827))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__18816,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18826.call(null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),expr__18827))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__18816,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18826.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930),expr__18827))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__18816,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18826.call(null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),expr__18827))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__18816,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18826.call(null,new cljs.core.Keyword(null,"generation","generation",-2132542044),expr__18827))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__18816,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18826.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),expr__18827))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__18816,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18826.call(null,new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),expr__18827))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__18816,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18826.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),expr__18827))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__18816,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18826.call(null,new cljs.core.Keyword(null,"success","success",1890645906),expr__18827))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__18816,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18826.call(null,new cljs.core.Keyword(null,"failure","failure",720415879),expr__18827))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__18816,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18826.call(null,new cljs.core.Keyword(null,"trace?","trace?",1730690679),expr__18827))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__18816,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__18816),null));
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
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"text","text",-1790561697),self__.text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"success","success",1890645906),self__.success,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trace?","trace?",1730690679),self__.trace_QMARK_,null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__18816){
var self__ = this;
var this__4384__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,G__18816,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

instaparse.gll.Tramp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"grammar","grammar",-773107502,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"segment","segment",675610331,null),new cljs.core.Symbol(null,"fail-index","fail-index",1889258450,null),new cljs.core.Symbol(null,"node-builder","node-builder",-316031078,null),new cljs.core.Symbol(null,"stack","stack",847125597,null),new cljs.core.Symbol(null,"next-stack","next-stack",1158600799,null),new cljs.core.Symbol(null,"generation","generation",-492010517,null),new cljs.core.Symbol(null,"negative-listeners","negative-listeners",1695772619,null),new cljs.core.Symbol(null,"msg-cache","msg-cache",906756457,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"success","success",-763789863,null),new cljs.core.Symbol(null,"failure","failure",-1934019890,null),new cljs.core.Symbol(null,"trace?","trace?",-923745090,null)], null);
});

instaparse.gll.Tramp.cljs$lang$type = true;

instaparse.gll.Tramp.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"instaparse.gll/Tramp",null,(1),null));
});

instaparse.gll.Tramp.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"instaparse.gll/Tramp");
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
instaparse.gll.map__GT_Tramp = (function instaparse$gll$map__GT_Tramp(G__18820){
var extmap__4424__auto__ = (function (){var G__18829 = cljs.core.dissoc.call(null,G__18820,new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"fail-index","fail-index",248726923),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"trace?","trace?",1730690679));
if(cljs.core.record_QMARK_.call(null,G__18820)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__18829);
} else {
return G__18829;
}
})();
return (new instaparse.gll.Tramp(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(G__18820),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__18820),new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(G__18820),new cljs.core.Keyword(null,"fail-index","fail-index",248726923).cljs$core$IFn$_invoke$arity$1(G__18820),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605).cljs$core$IFn$_invoke$arity$1(G__18820),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(G__18820),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(G__18820),new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(G__18820),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(G__18820),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070).cljs$core$IFn$_invoke$arity$1(G__18820),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(G__18820),new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(G__18820),new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(G__18820),new cljs.core.Keyword(null,"trace?","trace?",1730690679).cljs$core$IFn$_invoke$arity$1(G__18820),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

instaparse.gll.make_tramp = (function instaparse$gll$make_tramp(var_args){
var G__18832 = arguments.length;
switch (G__18832) {
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
return instaparse.gll.make_tramp.call(null,grammar,text,instaparse.gll.text__GT_segment.call(null,text),(-1),null);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3 = (function (grammar,text,segment){
return instaparse.gll.make_tramp.call(null,grammar,text,segment,(-1),null);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4 = (function (grammar,text,fail_index,node_builder){
return instaparse.gll.make_tramp.call(null,grammar,text,instaparse.gll.text__GT_segment.call(null,text),fail_index,node_builder);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5 = (function (grammar,text,segment,fail_index,node_builder){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,cljs.core.sorted_map_by.call(null,cljs.core._GT_)),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,(new instaparse.gll.Failure((0),cljs.core.PersistentVector.EMPTY,null,null,null))),false,null,null,null));
});

instaparse.gll.make_tramp.cljs$lang$maxFixedArity = 5;

instaparse.gll.make_success = (function instaparse$gll$make_success(result,index){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});
instaparse.gll.total_success_QMARK_ = (function instaparse$gll$total_success_QMARK_(tramp,s){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(s));
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

instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k18835,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__18839 = k18835;
var G__18839__$1 = (((G__18839 instanceof cljs.core.Keyword))?G__18839.fqn:null);
switch (G__18839__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k18835,else__4388__auto__);

}
});

instaparse.gll.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__18840){
var vec__18841 = p__18840;
var k__4408__auto__ = cljs.core.nth.call(null,vec__18841,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__18841,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

instaparse.gll.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#instaparse.gll.Node{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"results","results",-1134170113),self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results],null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18834){
var self__ = this;
var G__18834__$1 = this;
return (new cljs.core.RecordIter((0),G__18834__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"full-results","full-results",-1500225407)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (4 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1610074144 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

instaparse.gll.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18836,other18837){
var self__ = this;
var this18836__$1 = this;
return (((!((other18837 == null)))) && ((this18836__$1.constructor === other18837.constructor)) && (cljs.core._EQ_.call(null,this18836__$1.listeners,other18837.listeners)) && (cljs.core._EQ_.call(null,this18836__$1.full_listeners,other18837.full_listeners)) && (cljs.core._EQ_.call(null,this18836__$1.results,other18837.results)) && (cljs.core._EQ_.call(null,this18836__$1.full_results,other18837.full_results)) && (cljs.core._EQ_.call(null,this18836__$1.__extmap,other18837.__extmap)));
});

instaparse.gll.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"full-results","full-results",-1500225407),null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),null,new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__18834){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__18844 = cljs.core.keyword_identical_QMARK_;
var expr__18845 = k__4393__auto__;
if(cljs.core.truth_(pred__18844.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445),expr__18845))){
return (new instaparse.gll.Node(G__18834,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18844.call(null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),expr__18845))){
return (new instaparse.gll.Node(self__.listeners,G__18834,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18844.call(null,new cljs.core.Keyword(null,"results","results",-1134170113),expr__18845))){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__18834,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18844.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407),expr__18845))){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__18834,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__18834),null));
}
}
}
}
});

instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"results","results",-1134170113),self__.results,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results,null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__18834){
var self__ = this;
var this__4384__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__18834,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

instaparse.gll.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.Symbol(null,"full-listeners","full-listeners",1691153354,null),new cljs.core.Symbol(null,"results","results",506361414,null),new cljs.core.Symbol(null,"full-results","full-results",140306120,null)], null);
});

instaparse.gll.Node.cljs$lang$type = true;

instaparse.gll.Node.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"instaparse.gll/Node",null,(1),null));
});

instaparse.gll.Node.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"instaparse.gll/Node");
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
instaparse.gll.map__GT_Node = (function instaparse$gll$map__GT_Node(G__18838){
var extmap__4424__auto__ = (function (){var G__18847 = cljs.core.dissoc.call(null,G__18838,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"full-results","full-results",-1500225407));
if(cljs.core.record_QMARK_.call(null,G__18838)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__18847);
} else {
return G__18847;
}
})();
return (new instaparse.gll.Node(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(G__18838),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(G__18838),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(G__18838),new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(G__18838),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

instaparse.gll.make_node = (function instaparse$gll$make_node(){
return (new instaparse.gll.Node(cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),null,null,null));
});
/**
 * Pushes an item onto the trampoline's stack
 */
instaparse.gll.push_stack = (function instaparse$gll$push_stack(tramp,item){

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,item);
});
/**
 * Pushes onto stack a message to a given listener about a result
 */
instaparse.gll.push_message = (function instaparse$gll$push_message(tramp,listener,result){
var cache = new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070).cljs$core$IFn$_invoke$arity$1(tramp);
var i = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result);
var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [listener,i], null);
var c = cljs.core.get.call(null,cljs.core.deref.call(null,cache),k,(0));
var f = ((function (cache,i,k,c){
return (function (){
return listener.call(null,result);
});})(cache,i,k,c))
;

if((c > cljs.core.deref.call(null,new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(tramp)))){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,f);
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,f);
}

return cljs.core.swap_BANG_.call(null,cache,cljs.core.assoc,k,(c + (1)));
});
/**
 * Tests whether node already has a listener
 */
instaparse.gll.listener_exists_QMARK_ = (function instaparse$gll$listener_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5720__auto__ = cljs.core.deref.call(null,nodes).call(null,node_key);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return (cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node))) > (0));
} else {
return null;
}
});
/**
 * Tests whether node already has a listener or full-listener
 */
instaparse.gll.full_listener_exists_QMARK_ = (function instaparse$gll$full_listener_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5720__auto__ = cljs.core.deref.call(null,nodes).call(null,node_key);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return (((cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(node))) > (0))) || ((cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node))) > (0))));
} else {
return null;
}
});
/**
 * Tests whether node has a result or full-result
 */
instaparse.gll.result_exists_QMARK_ = (function instaparse$gll$result_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5720__auto__ = cljs.core.deref.call(null,nodes).call(null,node_key);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return (((cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node))) > (0))) || ((cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(node))) > (0))));
} else {
return null;
}
});
/**
 * Tests whether node has a full-result
 */
instaparse.gll.full_result_exists_QMARK_ = (function instaparse$gll$full_result_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5720__auto__ = cljs.core.deref.call(null,nodes).call(null,node_key);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return (cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node))) > (0));
} else {
return null;
}
});
/**
 * Gets node if already exists, otherwise creates one
 */
instaparse.gll.node_get = (function instaparse$gll$node_get(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5718__auto__ = cljs.core.deref.call(null,nodes).call(null,node_key);
if(cljs.core.truth_(temp__5718__auto__)){
var node = temp__5718__auto__;
return node;
} else {
var node = instaparse.gll.make_node.call(null);

cljs.core.swap_BANG_.call(null,nodes,cljs.core.assoc,node_key,node);

return node;
}
});
instaparse.gll.safe_with_meta = (function instaparse$gll$safe_with_meta(obj,metamap){
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,obj))){
return cljs.core.with_meta.call(null,obj,metamap);
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

var node = instaparse.gll.node_get.call(null,tramp,node_key);
var parser = node_key.call(null,(1));
var result__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"result","result",1415092211),null):result);
var result__$2 = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser);
if(cljs.core.truth_(temp__5718__auto__)){
var reduction_function = temp__5718__auto__;
return instaparse.gll.make_success.call(null,instaparse.gll.safe_with_meta.call(null,instaparse.reduction.apply_reduction.call(null,reduction_function,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),node_key.call(null,(0)),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result__$1)], null)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result__$1));
} else {
return result__$1;
}
})();
var total_QMARK_ = instaparse.gll.total_success_QMARK_.call(null,tramp,result__$2);
var results = ((total_QMARK_)?new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node):new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.not.call(null,cljs.core.deref.call(null,results).call(null,result__$2))){

cljs.core.swap_BANG_.call(null,results,cljs.core.conj,result__$2);

var seq__18850_18858 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__18851_18859 = null;
var count__18852_18860 = (0);
var i__18853_18861 = (0);
while(true){
if((i__18853_18861 < count__18852_18860)){
var listener_18862 = cljs.core._nth.call(null,chunk__18851_18859,i__18853_18861);
instaparse.gll.push_message.call(null,tramp,listener_18862,result__$2);


var G__18863 = seq__18850_18858;
var G__18864 = chunk__18851_18859;
var G__18865 = count__18852_18860;
var G__18866 = (i__18853_18861 + (1));
seq__18850_18858 = G__18863;
chunk__18851_18859 = G__18864;
count__18852_18860 = G__18865;
i__18853_18861 = G__18866;
continue;
} else {
var temp__5720__auto___18867 = cljs.core.seq.call(null,seq__18850_18858);
if(temp__5720__auto___18867){
var seq__18850_18868__$1 = temp__5720__auto___18867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18850_18868__$1)){
var c__4550__auto___18869 = cljs.core.chunk_first.call(null,seq__18850_18868__$1);
var G__18870 = cljs.core.chunk_rest.call(null,seq__18850_18868__$1);
var G__18871 = c__4550__auto___18869;
var G__18872 = cljs.core.count.call(null,c__4550__auto___18869);
var G__18873 = (0);
seq__18850_18858 = G__18870;
chunk__18851_18859 = G__18871;
count__18852_18860 = G__18872;
i__18853_18861 = G__18873;
continue;
} else {
var listener_18874 = cljs.core.first.call(null,seq__18850_18868__$1);
instaparse.gll.push_message.call(null,tramp,listener_18874,result__$2);


var G__18875 = cljs.core.next.call(null,seq__18850_18868__$1);
var G__18876 = null;
var G__18877 = (0);
var G__18878 = (0);
seq__18850_18858 = G__18875;
chunk__18851_18859 = G__18876;
count__18852_18860 = G__18877;
i__18853_18861 = G__18878;
continue;
}
} else {
}
}
break;
}

if(total_QMARK_){
var seq__18854 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__18855 = null;
var count__18856 = (0);
var i__18857 = (0);
while(true){
if((i__18857 < count__18856)){
var listener = cljs.core._nth.call(null,chunk__18855,i__18857);
instaparse.gll.push_message.call(null,tramp,listener,result__$2);


var G__18879 = seq__18854;
var G__18880 = chunk__18855;
var G__18881 = count__18856;
var G__18882 = (i__18857 + (1));
seq__18854 = G__18879;
chunk__18855 = G__18880;
count__18856 = G__18881;
i__18857 = G__18882;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18854);
if(temp__5720__auto__){
var seq__18854__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18854__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18854__$1);
var G__18883 = cljs.core.chunk_rest.call(null,seq__18854__$1);
var G__18884 = c__4550__auto__;
var G__18885 = cljs.core.count.call(null,c__4550__auto__);
var G__18886 = (0);
seq__18854 = G__18883;
chunk__18855 = G__18884;
count__18856 = G__18885;
i__18857 = G__18886;
continue;
} else {
var listener = cljs.core.first.call(null,seq__18854__$1);
instaparse.gll.push_message.call(null,tramp,listener,result__$2);


var G__18887 = cljs.core.next.call(null,seq__18854__$1);
var G__18888 = null;
var G__18889 = (0);
var G__18890 = (0);
seq__18854 = G__18887;
chunk__18855 = G__18888;
count__18856 = G__18889;
i__18857 = G__18890;
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
var listener_already_exists_QMARK_ = instaparse.gll.listener_exists_QMARK_.call(null,tramp,node_key);
var node = instaparse.gll.node_get.call(null,tramp,node_key);
var listeners = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node);

cljs.core.swap_BANG_.call(null,listeners,cljs.core.conj,listener);

var seq__18891_18899 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__18892_18900 = null;
var count__18893_18901 = (0);
var i__18894_18902 = (0);
while(true){
if((i__18894_18902 < count__18893_18901)){
var result_18903 = cljs.core._nth.call(null,chunk__18892_18900,i__18894_18902);
instaparse.gll.push_message.call(null,tramp,listener,result_18903);


var G__18904 = seq__18891_18899;
var G__18905 = chunk__18892_18900;
var G__18906 = count__18893_18901;
var G__18907 = (i__18894_18902 + (1));
seq__18891_18899 = G__18904;
chunk__18892_18900 = G__18905;
count__18893_18901 = G__18906;
i__18894_18902 = G__18907;
continue;
} else {
var temp__5720__auto___18908 = cljs.core.seq.call(null,seq__18891_18899);
if(temp__5720__auto___18908){
var seq__18891_18909__$1 = temp__5720__auto___18908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18891_18909__$1)){
var c__4550__auto___18910 = cljs.core.chunk_first.call(null,seq__18891_18909__$1);
var G__18911 = cljs.core.chunk_rest.call(null,seq__18891_18909__$1);
var G__18912 = c__4550__auto___18910;
var G__18913 = cljs.core.count.call(null,c__4550__auto___18910);
var G__18914 = (0);
seq__18891_18899 = G__18911;
chunk__18892_18900 = G__18912;
count__18893_18901 = G__18913;
i__18894_18902 = G__18914;
continue;
} else {
var result_18915 = cljs.core.first.call(null,seq__18891_18909__$1);
instaparse.gll.push_message.call(null,tramp,listener,result_18915);


var G__18916 = cljs.core.next.call(null,seq__18891_18909__$1);
var G__18917 = null;
var G__18918 = (0);
var G__18919 = (0);
seq__18891_18899 = G__18916;
chunk__18892_18900 = G__18917;
count__18893_18901 = G__18918;
i__18894_18902 = G__18919;
continue;
}
} else {
}
}
break;
}

var seq__18895_18920 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__18896_18921 = null;
var count__18897_18922 = (0);
var i__18898_18923 = (0);
while(true){
if((i__18898_18923 < count__18897_18922)){
var result_18924 = cljs.core._nth.call(null,chunk__18896_18921,i__18898_18923);
instaparse.gll.push_message.call(null,tramp,listener,result_18924);


var G__18925 = seq__18895_18920;
var G__18926 = chunk__18896_18921;
var G__18927 = count__18897_18922;
var G__18928 = (i__18898_18923 + (1));
seq__18895_18920 = G__18925;
chunk__18896_18921 = G__18926;
count__18897_18922 = G__18927;
i__18898_18923 = G__18928;
continue;
} else {
var temp__5720__auto___18929 = cljs.core.seq.call(null,seq__18895_18920);
if(temp__5720__auto___18929){
var seq__18895_18930__$1 = temp__5720__auto___18929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18895_18930__$1)){
var c__4550__auto___18931 = cljs.core.chunk_first.call(null,seq__18895_18930__$1);
var G__18932 = cljs.core.chunk_rest.call(null,seq__18895_18930__$1);
var G__18933 = c__4550__auto___18931;
var G__18934 = cljs.core.count.call(null,c__4550__auto___18931);
var G__18935 = (0);
seq__18895_18920 = G__18932;
chunk__18896_18921 = G__18933;
count__18897_18922 = G__18934;
i__18898_18923 = G__18935;
continue;
} else {
var result_18936 = cljs.core.first.call(null,seq__18895_18930__$1);
instaparse.gll.push_message.call(null,tramp,listener,result_18936);


var G__18937 = cljs.core.next.call(null,seq__18895_18930__$1);
var G__18938 = null;
var G__18939 = (0);
var G__18940 = (0);
seq__18895_18920 = G__18937;
chunk__18896_18921 = G__18938;
count__18897_18922 = G__18939;
i__18898_18923 = G__18940;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not.call(null,listener_already_exists_QMARK_)){
return instaparse.gll.push_stack.call(null,tramp,((function (listener_already_exists_QMARK_,node,listeners){
return (function (){
return instaparse.gll._parse.call(null,node_key.call(null,(1)),node_key.call(null,(0)),tramp);
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
var full_listener_already_exists_QMARK_ = instaparse.gll.full_listener_exists_QMARK_.call(null,tramp,node_key);
var node = instaparse.gll.node_get.call(null,tramp,node_key);
var listeners = new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(node);

cljs.core.swap_BANG_.call(null,listeners,cljs.core.conj,listener);

var seq__18941_18945 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__18942_18946 = null;
var count__18943_18947 = (0);
var i__18944_18948 = (0);
while(true){
if((i__18944_18948 < count__18943_18947)){
var result_18949 = cljs.core._nth.call(null,chunk__18942_18946,i__18944_18948);
instaparse.gll.push_message.call(null,tramp,listener,result_18949);


var G__18950 = seq__18941_18945;
var G__18951 = chunk__18942_18946;
var G__18952 = count__18943_18947;
var G__18953 = (i__18944_18948 + (1));
seq__18941_18945 = G__18950;
chunk__18942_18946 = G__18951;
count__18943_18947 = G__18952;
i__18944_18948 = G__18953;
continue;
} else {
var temp__5720__auto___18954 = cljs.core.seq.call(null,seq__18941_18945);
if(temp__5720__auto___18954){
var seq__18941_18955__$1 = temp__5720__auto___18954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18941_18955__$1)){
var c__4550__auto___18956 = cljs.core.chunk_first.call(null,seq__18941_18955__$1);
var G__18957 = cljs.core.chunk_rest.call(null,seq__18941_18955__$1);
var G__18958 = c__4550__auto___18956;
var G__18959 = cljs.core.count.call(null,c__4550__auto___18956);
var G__18960 = (0);
seq__18941_18945 = G__18957;
chunk__18942_18946 = G__18958;
count__18943_18947 = G__18959;
i__18944_18948 = G__18960;
continue;
} else {
var result_18961 = cljs.core.first.call(null,seq__18941_18955__$1);
instaparse.gll.push_message.call(null,tramp,listener,result_18961);


var G__18962 = cljs.core.next.call(null,seq__18941_18955__$1);
var G__18963 = null;
var G__18964 = (0);
var G__18965 = (0);
seq__18941_18945 = G__18962;
chunk__18942_18946 = G__18963;
count__18943_18947 = G__18964;
i__18944_18948 = G__18965;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not.call(null,full_listener_already_exists_QMARK_)){
return instaparse.gll.push_stack.call(null,tramp,((function (full_listener_already_exists_QMARK_,node,listeners){
return (function (){
return instaparse.gll._full_parse.call(null,node_key.call(null,(1)),node_key.call(null,(0)),tramp);
});})(full_listener_already_exists_QMARK_,node,listeners))
);
} else {
return null;
}
});
instaparse.gll.merge_negative_listeners = cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.into);
/**
 * Pushes a thunk onto the trampoline's negative-listener stack.
 */
instaparse.gll.push_negative_listener = (function instaparse$gll$push_negative_listener(tramp,creator,negative_listener){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp),instaparse.gll.merge_negative_listeners,cljs.core.PersistentArrayMap.createAsIfByAssoc([creator.call(null,(0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negative_listener], null)]));
});
instaparse.gll.fail = (function instaparse$gll$fail(tramp,node_key,index,reason){

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(tramp),(function (failure){
var current_index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure);
var G__18966 = cljs.core.compare.call(null,index,current_index);
switch (G__18966) {
case (1):
return (new instaparse.gll.Failure(index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reason], null),null,null,null));

break;
case (0):
return (new instaparse.gll.Failure(index,cljs.core.conj.call(null,new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(failure),reason),null,null,null));

break;
case (-1):
return failure;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18966)].join('')));

}
}));

if(cljs.core._EQ_.call(null,index,new cljs.core.Keyword(null,"fail-index","fail-index",248726923).cljs$core$IFn$_invoke$arity$1(tramp))){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,instaparse.gll.build_node_with_meta.call(null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),instaparse.gll.sub_sequence.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp),index),index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))),cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))));
} else {
return null;
}
});
/**
 * Executes one thing on the stack (not threadsafe)
 */
instaparse.gll.step = (function instaparse$gll$step(stack){
var top = cljs.core.peek.call(null,cljs.core.deref.call(null,stack));
cljs.core.swap_BANG_.call(null,stack,cljs.core.pop);

return top.call(null);
});
/**
 * Executes the stack until exhausted
 */
instaparse.gll.run = (function instaparse$gll$run(var_args){
var G__18969 = arguments.length;
switch (G__18969) {
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
return instaparse.gll.run.call(null,tramp,null);
});

instaparse.gll.run.cljs$core$IFn$_invoke$arity$2 = (function (tramp,found_result_QMARK_){
while(true){
var stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp)))){

return cljs.core.cons.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp))),(new cljs.core.LazySeq(null,((function (tramp,found_result_QMARK_,stack){
return (function (){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp),null);

return instaparse.gll.run.call(null,tramp,true);
});})(tramp,found_result_QMARK_,stack))
,null,null)));
} else {
if((cljs.core.count.call(null,cljs.core.deref.call(null,stack)) > (0))){
instaparse.gll.step.call(null,stack);

var G__18974 = tramp;
var G__18975 = found_result_QMARK_;
tramp = G__18974;
found_result_QMARK_ = G__18975;
continue;
} else {
if((cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp))) > (0))){
var vec__18970 = cljs.core.first.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp)));
var index = cljs.core.nth.call(null,vec__18970,(0),null);
var listeners = cljs.core.nth.call(null,vec__18970,(1),null);
var listener = cljs.core.peek.call(null,listeners);

listener.call(null);

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,listeners),(1))){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.dissoc,index);
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null),cljs.core.pop);
}

var G__18976 = tramp;
var G__18977 = found_result_QMARK_;
tramp = G__18976;
found_result_QMARK_ = G__18977;
continue;
} else {
if(cljs.core.truth_(found_result_QMARK_)){
var next_stack = new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(tramp);
cljs.core.reset_BANG_.call(null,stack,cljs.core.deref.call(null,next_stack));

cljs.core.reset_BANG_.call(null,next_stack,cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.inc);

var G__18978 = tramp;
var G__18979 = null;
tramp = G__18978;
found_result_QMARK_ = G__18979;
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
return instaparse.gll.push_result.call(null,tramp,node_key,result);
});
});
instaparse.gll.LookListener = (function instaparse$gll$LookListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,node_key.call(null,(0))));
});
});
instaparse.gll.CatListener = (function instaparse$gll$CatListener(results_so_far,parser_sequence,node_key,tramp){

return (function (result){
var map__18980 = result;
var map__18980__$1 = (((((!((map__18980 == null))))?(((((map__18980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18980):map__18980);
var parsed_result = cljs.core.get.call(null,map__18980__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__18980__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
if(cljs.core.seq.call(null,parser_sequence)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),instaparse.gll.CatListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else {
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
}
});
});
instaparse.gll.CatFullListener = (function instaparse$gll$CatFullListener(results_so_far,parser_sequence,node_key,tramp){
return (function (result){
var map__18982 = result;
var map__18982__$1 = (((((!((map__18982 == null))))?(((((map__18982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18982):map__18982);
var parsed_result = cljs.core.get.call(null,map__18982__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__18982__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
if(instaparse.reduction.singleton_QMARK_.call(null,parser_sequence)){
return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),instaparse.gll.CatFullListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else {
if(cljs.core.seq.call(null,parser_sequence)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),instaparse.gll.CatFullListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else {
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));

}
}
});
});
instaparse.gll.PlusListener = (function instaparse$gll$PlusListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__18984 = result;
var map__18984__$1 = (((((!((map__18984 == null))))?(((((map__18984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18984):map__18984);
var parsed_result = cljs.core.get.call(null,map__18984__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__18984__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core._EQ_.call(null,continue_index,prev_index)){
if((cljs.core.count.call(null,results_so_far) === (0))){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse.gll.PlusListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp));

return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
}
});
});
instaparse.gll.PlusFullListener = (function instaparse$gll$PlusFullListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__18986 = result;
var map__18986__$1 = (((((!((map__18986 == null))))?(((((map__18986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18986):map__18986);
var parsed_result = cljs.core.get.call(null,map__18986__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__18986__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core._EQ_.call(null,continue_index,prev_index)){
if((cljs.core.count.call(null,results_so_far) === (0))){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
if(cljs.core._EQ_.call(null,continue_index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else {
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse.gll.PlusFullListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp));
}
}
});
});
instaparse.gll.RepListener = (function instaparse$gll$RepListener(results_so_far,n_results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__18988 = result;
var map__18988__$1 = (((((!((map__18988 == null))))?(((((map__18988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18988):map__18988);
var parsed_result = cljs.core.get.call(null,map__18988__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__18988__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
var new_n_results_so_far = (n_results_so_far + (1));
if((((m <= new_n_results_so_far)) && ((new_n_results_so_far <= n)))){
instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else {
}

if((new_n_results_so_far < n)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse.gll.RepListener.call(null,new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp));
} else {
return null;
}
});
});
instaparse.gll.RepFullListener = (function instaparse$gll$RepFullListener(results_so_far,n_results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__18990 = result;
var map__18990__$1 = (((((!((map__18990 == null))))?(((((map__18990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18990):map__18990);
var parsed_result = cljs.core.get.call(null,map__18990__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__18990__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
var new_n_results_so_far = (n_results_so_far + (1));
if(cljs.core._EQ_.call(null,continue_index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
if((((m <= new_n_results_so_far)) && ((new_n_results_so_far <= n)))){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else {
return null;
}
} else {
if((new_n_results_so_far < n)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse.gll.RepFullListener.call(null,new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp));
} else {
return null;
}
}
});
});
instaparse.gll.TopListener = (function instaparse$gll$TopListener(tramp){
return (function (result){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp),result);
});
});
instaparse.gll.string_parse = (function instaparse$gll$string_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4222__auto__ = cljs.core.count.call(null,text);
var y__4223__auto__ = (index + cljs.core.count.call(null,string));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var head = instaparse.gll.sub_sequence.call(null,text,index,end);
if(cljs.core._EQ_.call(null,string,head)){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string], null));
}
});
instaparse.gll.string_full_parse = (function instaparse$gll$string_full_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4222__auto__ = cljs.core.count.call(null,text);
var y__4223__auto__ = (index + cljs.core.count.call(null,string));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var head = instaparse.gll.sub_sequence.call(null,text,index,end);
if(((cljs.core._EQ_.call(null,end,cljs.core.count.call(null,text))) && (cljs.core._EQ_.call(null,string,head)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.equals_ignore_case = (function instaparse$gll$equals_ignore_case(s1,s2){
return cljs.core._EQ_.call(null,s1.toUpperCase(),s2.toUpperCase());
});
instaparse.gll.string_case_insensitive_parse = (function instaparse$gll$string_case_insensitive_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4222__auto__ = cljs.core.count.call(null,text);
var y__4223__auto__ = (index + cljs.core.count.call(null,string));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var head = instaparse.gll.sub_sequence.call(null,text,index,end);
if(instaparse.gll.equals_ignore_case.call(null,string,head)){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string], null));
}
});
instaparse.gll.string_case_insensitive_full_parse = (function instaparse$gll$string_case_insensitive_full_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4222__auto__ = cljs.core.count.call(null,text);
var y__4223__auto__ = (index + cljs.core.count.call(null,string));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var head = instaparse.gll.sub_sequence.call(null,text,index,end);
if(((cljs.core._EQ_.call(null,end,cljs.core.count.call(null,text))) && (instaparse.gll.equals_ignore_case.call(null,string,head)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.single_char_code_at = (function instaparse$gll$single_char_code_at(text,index){
return text.charCodeAt(index);
});
instaparse.gll.unicode_code_point_at = (function instaparse$gll$unicode_code_point_at(text,index){
return goog.i18n.uChar.getCodePointAround(text,(index | (0)));
});
instaparse.gll.code_point__GT_chars = (function instaparse$gll$code_point__GT_chars(code_point){
return goog.i18n.uChar.fromCharCode(code_point);
});
instaparse.gll.char_range_parse = (function instaparse$gll$char_range_parse(this$,index,tramp){
var lo = new cljs.core.Keyword(null,"lo","lo",-931799889).cljs$core$IFn$_invoke$arity$1(this$);
var hi = new cljs.core.Keyword(null,"hi","hi",-1821422114).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
if((index >= cljs.core.count.call(null,text))){
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
} else {
if((hi <= (65535))){
var code = instaparse.gll.single_char_code_at.call(null,text,index);
if((((lo <= code)) && ((code <= hi)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,code)),(index + (1))));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
}
} else {
var code_point = instaparse.gll.unicode_code_point_at.call(null,text,index);
var char_string = instaparse.gll.code_point__GT_chars.call(null,code_point);
if((((lo <= code_point)) && ((code_point <= hi)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,char_string,(index + cljs.core.count.call(null,char_string))));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
}

}
}
});
instaparse.gll.char_range_full_parse = (function instaparse$gll$char_range_full_parse(this$,index,tramp){
var lo = new cljs.core.Keyword(null,"lo","lo",-931799889).cljs$core$IFn$_invoke$arity$1(this$);
var hi = new cljs.core.Keyword(null,"hi","hi",-1821422114).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = cljs.core.count.call(null,text);
if((index >= cljs.core.count.call(null,text))){
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
} else {
if((hi <= (65535))){
var code = instaparse.gll.single_char_code_at.call(null,text,index);
if(((cljs.core._EQ_.call(null,(index + (1)),end)) && ((((lo <= code)) && ((code <= hi)))))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,code)),end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
}
} else {
var code_point = instaparse.gll.unicode_code_point_at.call(null,text,index);
var char_string = instaparse.gll.code_point__GT_chars.call(null,code_point);
if(((cljs.core._EQ_.call(null,(index + cljs.core.count.call(null,char_string)),end)) && ((((lo <= code_point)) && ((code_point <= hi)))))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,char_string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null),new cljs.core.Keyword(null,"full","full",436801220),true], null));
}

}
}
});
instaparse.gll.re_match_at_front = (function instaparse$gll$re_match_at_front(regexp,text){
var re = (new RegExp(regexp.source,["g",instaparse.util.regexp_flags.call(null,regexp)].join('')));
var m = re.exec(text);
if(cljs.core.truth_((function (){var and__4120__auto__ = m;
if(cljs.core.truth_(and__4120__auto__)){
return (m.index === (0));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.first.call(null,m);
} else {
return null;
}
});
instaparse.gll.regexp_parse = (function instaparse$gll$regexp_parse(this$,index,tramp){
var regexp = new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(tramp);
var substring = instaparse.gll.sub_sequence.call(null,text,index);
var match = instaparse.gll.re_match_at_front.call(null,regexp,substring);
if(cljs.core.truth_(match)){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,match,(index + cljs.core.count.call(null,match))));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"expecting","expecting",-57706705),regexp], null));
}
});
instaparse.gll.regexp_full_parse = (function instaparse$gll$regexp_full_parse(this$,index,tramp){
var regexp = new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(tramp);
var substring = instaparse.gll.sub_sequence.call(null,text,index);
var match = instaparse.gll.re_match_at_front.call(null,regexp,substring);
var desired_length = (cljs.core.count.call(null,text) - index);
if(cljs.core.truth_((function (){var and__4120__auto__ = match;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,match),desired_length);
} else {
return and__4120__auto__;
}
})())){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,match,cljs.core.count.call(null,text)));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"expecting","expecting",-57706705),regexp,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.cat_parse = (function instaparse$gll$cat_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first.call(null,parsers)], null),instaparse.gll.CatListener.call(null,instaparse.auto_flatten_seq.EMPTY,cljs.core.next.call(null,parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.cat_full_parse = (function instaparse$gll$cat_full_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first.call(null,parsers)], null),instaparse.gll.CatFullListener.call(null,instaparse.auto_flatten_seq.EMPTY,cljs.core.next.call(null,parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.plus_parse = (function instaparse$gll$plus_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener.call(null,instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.plus_full_parse = (function instaparse$gll$plus_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener.call(null,instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.rep_parse = (function instaparse$gll$rep_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var m = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this$);
var n = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));

if((n >= (1))){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener.call(null,instaparse.auto_flatten_seq.EMPTY,(0),parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener.call(null,instaparse.auto_flatten_seq.EMPTY,(0),parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.rep_full_parse = (function instaparse$gll$rep_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var m = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this$);
var n = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));

if((n >= (1))){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener.call(null,instaparse.auto_flatten_seq.EMPTY,(0),parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener.call(null,instaparse.auto_flatten_seq.EMPTY,(0),parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.star_parse = (function instaparse$gll$star_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener.call(null,instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});
instaparse.gll.star_full_parse = (function instaparse$gll$star_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else {
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener.call(null,instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.alt_parse = (function instaparse$gll$alt_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
var seq__18992 = cljs.core.seq.call(null,parsers);
var chunk__18993 = null;
var count__18994 = (0);
var i__18995 = (0);
while(true){
if((i__18995 < count__18994)){
var parser = cljs.core._nth.call(null,chunk__18993,i__18995);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__18996 = seq__18992;
var G__18997 = chunk__18993;
var G__18998 = count__18994;
var G__18999 = (i__18995 + (1));
seq__18992 = G__18996;
chunk__18993 = G__18997;
count__18994 = G__18998;
i__18995 = G__18999;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18992);
if(temp__5720__auto__){
var seq__18992__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18992__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18992__$1);
var G__19000 = cljs.core.chunk_rest.call(null,seq__18992__$1);
var G__19001 = c__4550__auto__;
var G__19002 = cljs.core.count.call(null,c__4550__auto__);
var G__19003 = (0);
seq__18992 = G__19000;
chunk__18993 = G__19001;
count__18994 = G__19002;
i__18995 = G__19003;
continue;
} else {
var parser = cljs.core.first.call(null,seq__18992__$1);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__19004 = cljs.core.next.call(null,seq__18992__$1);
var G__19005 = null;
var G__19006 = (0);
var G__19007 = (0);
seq__18992 = G__19004;
chunk__18993 = G__19005;
count__18994 = G__19006;
i__18995 = G__19007;
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
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
var seq__19008 = cljs.core.seq.call(null,parsers);
var chunk__19009 = null;
var count__19010 = (0);
var i__19011 = (0);
while(true){
if((i__19011 < count__19010)){
var parser = cljs.core._nth.call(null,chunk__19009,i__19011);
instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__19012 = seq__19008;
var G__19013 = chunk__19009;
var G__19014 = count__19010;
var G__19015 = (i__19011 + (1));
seq__19008 = G__19012;
chunk__19009 = G__19013;
count__19010 = G__19014;
i__19011 = G__19015;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19008);
if(temp__5720__auto__){
var seq__19008__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19008__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19008__$1);
var G__19016 = cljs.core.chunk_rest.call(null,seq__19008__$1);
var G__19017 = c__4550__auto__;
var G__19018 = cljs.core.count.call(null,c__4550__auto__);
var G__19019 = (0);
seq__19008 = G__19016;
chunk__19009 = G__19017;
count__19010 = G__19018;
i__19011 = G__19019;
continue;
} else {
var parser = cljs.core.first.call(null,seq__19008__$1);
instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__19020 = cljs.core.next.call(null,seq__19008__$1);
var G__19021 = null;
var G__19022 = (0);
var G__19023 = (0);
seq__19008 = G__19020;
chunk__19009 = G__19021;
count__19010 = G__19022;
i__19011 = G__19023;
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
var parser1 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_listener.call(null,tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener.call(null,tramp,node_key_parser1,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){
return instaparse.gll.push_listener.call(null,tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.ordered_alt_full_parse = (function instaparse$gll$ordered_alt_full_parse(this$,index,tramp){
var parser1 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_full_listener.call(null,tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener.call(null,tramp,node_key_parser1,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){
return instaparse.gll.push_full_listener.call(null,tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.opt_parse = (function instaparse$gll$opt_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});
instaparse.gll.opt_full_parse = (function instaparse$gll$opt_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.non_terminal_parse = (function instaparse$gll$non_terminal_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.non_terminal_full_parse = (function instaparse$gll$non_terminal_full_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_parse = (function instaparse$gll$lookahead_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.LookListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_full_parse = (function instaparse$gll$lookahead_full_parse(this$,index,tramp){
if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.lookahead_parse.call(null,this$,index,tramp);
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"lookahead","lookahead",-400102393),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.negative_lookahead_parse = (function instaparse$gll$negative_lookahead_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var node_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null);
if(cljs.core.truth_(instaparse.gll.result_exists_QMARK_.call(null,tramp,node_key))){
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387)], null));
} else {
instaparse.gll.push_listener.call(null,tramp,node_key,(function (){var fail_send = (new cljs.core.Delay(((function (parser,node_key){
return (function (){
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"NOT","NOT",-1689245341),instaparse.print.combinators__GT_str.call(null,parser)], null)], null));
});})(parser,node_key))
,null));
return ((function (fail_send,parser,node_key){
return (function (result){
return cljs.core.force.call(null,fail_send);
});
;})(fail_send,parser,node_key))
})());

return instaparse.gll.push_negative_listener.call(null,tramp,node_key,((function (parser,node_key){
return (function (){
if(cljs.core.not.call(null,instaparse.gll.result_exists_QMARK_.call(null,tramp,node_key))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else {
return null;
}
});})(parser,node_key))
);
}
});
instaparse.gll.epsilon_parse = (function instaparse$gll$epsilon_parse(this$,index,tramp){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});
instaparse.gll.epsilon_full_parse = (function instaparse$gll$epsilon_full_parse(this$,index,tramp){
if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"Epsilon","Epsilon",133418452),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.start_parser = (function instaparse$gll$start_parser(tramp,parser,partial_QMARK_){
if(cljs.core.truth_(partial_QMARK_)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener.call(null,tramp));
} else {
return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener.call(null,tramp));
}
});
instaparse.gll.parses = (function instaparse$gll$parses(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.call(null,grammar,text);
var parser = instaparse.combinators_source.nt.call(null,start);
instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);

var temp__5718__auto__ = instaparse.gll.run.call(null,tramp);
if(cljs.core.truth_(temp__5718__auto__)){
var all_parses = temp__5718__auto__;
return all_parses;
} else {
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,instaparse.failure.augment_failure.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(tramp)),text));
}
});
instaparse.gll.parse = (function instaparse$gll$parse(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.call(null,grammar,text);
var parser = instaparse.combinators_source.nt.call(null,start);
instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);

var temp__5718__auto__ = instaparse.gll.run.call(null,tramp);
if(cljs.core.truth_(temp__5718__auto__)){
var all_parses = temp__5718__auto__;
return cljs.core.first.call(null,all_parses);
} else {
return instaparse.failure.augment_failure.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(tramp)),text);
}
});
instaparse.gll.build_node_with_meta = (function instaparse$gll$build_node_with_meta(node_builder,tag,content,start,end){
return cljs.core.with_meta.call(null,node_builder.call(null,tag,content),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),start,new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),end], null));
});
instaparse.gll.build_total_failure_node = (function instaparse$gll$build_total_failure_node(node_builder,start,text){
var build_failure_node = instaparse.gll.build_node_with_meta.call(null,node_builder,new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),text,(0),cljs.core.count.call(null,text));
var build_start_node = instaparse.gll.build_node_with_meta.call(null,node_builder,start,build_failure_node,(0),cljs.core.count.call(null,text));
return build_start_node;
});
instaparse.gll.parses_total_after_fail = (function instaparse$gll$parses_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){
var tramp = instaparse.gll.make_tramp.call(null,grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt.call(null,start);

instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);

var temp__5718__auto__ = instaparse.gll.run.call(null,tramp);
if(cljs.core.truth_(temp__5718__auto__)){
var all_parses = temp__5718__auto__;
return all_parses;
} else {
return (new cljs.core.List(null,instaparse.gll.build_total_failure_node.call(null,node_builder,start,text),null,(1),null));
}
});
/**
 * A variation on with-meta that merges the existing metamap into the new metamap,
 * rather than overwriting the metamap entirely.
 */
instaparse.gll.merge_meta = (function instaparse$gll$merge_meta(obj,metamap){
return cljs.core.with_meta.call(null,obj,cljs.core.merge.call(null,metamap,cljs.core.meta.call(null,obj)));
});
instaparse.gll.parses_total = (function instaparse$gll$parses_total(grammar,start,text,partial_QMARK_,node_builder){

var all_parses = instaparse.gll.parses.call(null,grammar,start,text,partial_QMARK_);
if(cljs.core.seq.call(null,all_parses)){
return all_parses;
} else {
return instaparse.gll.merge_meta.call(null,instaparse.gll.parses_total_after_fail.call(null,grammar,start,text,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,all_parses)),partial_QMARK_,node_builder),cljs.core.meta.call(null,all_parses));
}
});
instaparse.gll.parse_total_after_fail = (function instaparse$gll$parse_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){
var tramp = instaparse.gll.make_tramp.call(null,grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt.call(null,start);

instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);

var temp__5718__auto__ = instaparse.gll.run.call(null,tramp);
if(cljs.core.truth_(temp__5718__auto__)){
var all_parses = temp__5718__auto__;
return cljs.core.first.call(null,all_parses);
} else {
return instaparse.gll.build_total_failure_node.call(null,node_builder,start,text);
}
});
instaparse.gll.parse_total = (function instaparse$gll$parse_total(grammar,start,text,partial_QMARK_,node_builder){

var result = instaparse.gll.parse.call(null,grammar,start,text,partial_QMARK_);
if((!((result instanceof instaparse.gll.Failure)))){
return result;
} else {
return instaparse.gll.merge_meta.call(null,instaparse.gll.parse_total_after_fail.call(null,grammar,start,text,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result),partial_QMARK_,node_builder),result);
}
});

//# sourceMappingURL=gll.js.map
