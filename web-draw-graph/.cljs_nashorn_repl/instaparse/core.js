// Compiled by ClojureScript 1.10.439 {:target :nashorn}
goog.provide('instaparse.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('instaparse.gll');
goog.require('instaparse.cfg');
goog.require('instaparse.failure');
goog.require('instaparse.print');
goog.require('instaparse.reduction');
goog.require('instaparse.transform');
goog.require('instaparse.abnf');
goog.require('instaparse.repeat');
goog.require('instaparse.combinators_source');
goog.require('instaparse.line_col');
goog.require('instaparse.viz');
goog.require('instaparse.util');
instaparse.core._STAR_default_output_format_STAR_ = new cljs.core.Keyword(null,"hiccup","hiccup",1218876238);
/**
 * Changes the default output format.  Input should be :hiccup or :enlive
 */
instaparse.core.set_default_output_format_BANG_ = (function instaparse$core$set_default_output_format_BANG_(type){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null).call(null,type))){
} else {
throw (new Error("Assert failed: (#{:hiccup :enlive} type)"));
}

return instaparse.core._STAR_default_output_format_STAR_ = type;
});
instaparse.core._STAR_default_input_format_STAR_ = new cljs.core.Keyword(null,"ebnf","ebnf",31967825);
/**
 * Changes the default input format.  Input should be :abnf or :ebnf
 */
instaparse.core.set_default_input_format_BANG_ = (function instaparse$core$set_default_input_format_BANG_(type){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ebnf","ebnf",31967825),null,new cljs.core.Keyword(null,"abnf","abnf",-152462052),null], null), null).call(null,type))){
} else {
throw (new Error("Assert failed: (#{:ebnf :abnf} type)"));
}

return instaparse.core._STAR_default_input_format_STAR_ = type;
});


instaparse.core.unhide_parser = (function instaparse$core$unhide_parser(parser,unhide){
var G__30082 = unhide;
if(cljs.core._EQ_.call(null,null,G__30082)){
return parser;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"content","content",15833224),G__30082)){
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_all_content.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977),G__30082)){
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_tags.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"all","all",892129742),G__30082)){
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_all.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30082)].join('')));

}
}
}
}
});
/**
 * Use parser to parse the text.  Returns first parse tree found
 * that completely parses the text.  If no parse tree is possible, returns
 * a Failure object.
 * 
 * Optional keyword arguments:
 * :start :keyword  (where :keyword is name of starting production rule)
 * :partial true    (parses that don't consume the whole string are okay)
 * :total true      (if parse fails, embed failure node in tree)
 * :unhide <:tags or :content or :all> (for this parse, disable hiding)
 * :optimize :memory   (when possible, employ strategy to use less memory)
 * 
 * Clj only:
 * :trace true      (print diagnostic trace while parsing)
 */
instaparse.core.parse = (function instaparse$core$parse(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30089 = arguments.length;
var i__4642__auto___30090 = (0);
while(true){
if((i__4642__auto___30090 < len__4641__auto___30089)){
args__4647__auto__.push((arguments[i__4642__auto___30090]));

var G__30091 = (i__4642__auto___30090 + (1));
i__4642__auto___30090 = G__30091;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__30086){
var map__30087 = p__30086;
var map__30087__$1 = (((((!((map__30087 == null))))?(((((map__30087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30087):map__30087);
var options = map__30087__$1;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"memory","memory",-1449401430),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"optimize","optimize",-1912349448)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :memory} (get options :optimize))"));
}

var start_production = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"partial","partial",241141745),false);
var optimize_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),false);
var unhide = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695));
var trace_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
var parser__$1 = instaparse.core.unhide_parser.call(null,parser,unhide);
if(cljs.core.truth_(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parse_total.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,instaparse.reduction.node_builders.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = optimize_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,partial_QMARK_);
} else {
return and__4036__auto__;
}
})())){
var result = instaparse.repeat.try_repeating_parse_strategy.call(null,parser__$1,text,start_production);
if(cljs.core.truth_(instaparse.core.failure_QMARK_.call(null,result))){
return instaparse.gll.parse.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);
} else {
return result;
}
} else {
return instaparse.gll.parse.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
}
});

instaparse.core.parse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
instaparse.core.parse.cljs$lang$applyTo = (function (seq30083){
var G__30084 = cljs.core.first.call(null,seq30083);
var seq30083__$1 = cljs.core.next.call(null,seq30083);
var G__30085 = cljs.core.first.call(null,seq30083__$1);
var seq30083__$2 = cljs.core.next.call(null,seq30083__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30084,G__30085,seq30083__$2);
});

/**
 * Use parser to parse the text.  Returns lazy seq of all parse trees
 * that completely parse the text.  If no parse tree is possible, returns
 * () with a Failure object attached as metadata.
 * 
 * Optional keyword arguments:
 * :start :keyword  (where :keyword is name of starting production rule)
 * :partial true    (parses that don't consume the whole string are okay)
 * :total true      (if parse fails, embed failure node in tree)
 * :unhide <:tags or :content or :all> (for this parse, disable hiding)
 * 
 * Clj only:
 * :trace true      (print diagnostic trace while parsing)
 */
instaparse.core.parses = (function instaparse$core$parses(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30098 = arguments.length;
var i__4642__auto___30099 = (0);
while(true){
if((i__4642__auto___30099 < len__4641__auto___30098)){
args__4647__auto__.push((arguments[i__4642__auto___30099]));

var G__30100 = (i__4642__auto___30099 + (1));
i__4642__auto___30099 = G__30100;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__30095){
var map__30096 = p__30095;
var map__30096__$1 = (((((!((map__30096 == null))))?(((((map__30096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30096):map__30096);
var options = map__30096__$1;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

var start_production = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"partial","partial",241141745),false);
var unhide = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695));
var trace_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
var parser__$1 = instaparse.core.unhide_parser.call(null,parser,unhide);
if(cljs.core.truth_(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parses_total.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,instaparse.reduction.node_builders.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
return instaparse.gll.parses.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
});

instaparse.core.parses.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
instaparse.core.parses.cljs$lang$applyTo = (function (seq30092){
var G__30093 = cljs.core.first.call(null,seq30092);
var seq30092__$1 = cljs.core.next.call(null,seq30092);
var G__30094 = cljs.core.first.call(null,seq30092__$1);
var seq30092__$2 = cljs.core.next.call(null,seq30092__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30093,G__30094,seq30092__$2);
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
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
instaparse.core.Parser = (function (grammar,start_production,output_format,__meta,__extmap,__hash){
this.grammar = grammar;
this.start_production = start_production;
this.output_format = output_format;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k30102,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__30107 = k30102;
var G__30107__$1 = (((G__30107 instanceof cljs.core.Keyword))?G__30107.fqn:null);
switch (G__30107__$1) {
case "grammar":
return self__.grammar;

break;
case "start-production":
return self__.start_production;

break;
case "output-format":
return self__.output_format;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30102,else__4304__auto__);

}
});

instaparse.core.Parser.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__30108){
var vec__30109 = p__30108;
var k__4324__auto__ = cljs.core.nth.call(null,vec__30109,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__30109,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#instaparse.core.Parser{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-production","start-production",687546537),self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-format","output-format",-1826382676),self__.output_format],null))], null),self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30101){
var self__ = this;
var G__30101__$1 = this;
return (new cljs.core.RecordIter((0),G__30101__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"start-production","start-production",687546537),new cljs.core.Keyword(null,"output-format","output-format",-1826382676)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

instaparse.core.Parser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

instaparse.core.Parser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.core.Parser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-360509877 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

instaparse.core.Parser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30103,other30104){
var self__ = this;
var this30103__$1 = this;
return (((!((other30104 == null)))) && ((this30103__$1.constructor === other30104.constructor)) && (cljs.core._EQ_.call(null,this30103__$1.grammar,other30104.grammar)) && (cljs.core._EQ_.call(null,this30103__$1.start_production,other30104.start_production)) && (cljs.core._EQ_.call(null,this30103__$1.output_format,other30104.output_format)) && (cljs.core._EQ_.call(null,this30103__$1.__extmap,other30104.__extmap)));
});

instaparse.core.Parser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-production","start-production",687546537),null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

instaparse.core.Parser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__30101){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__30112 = cljs.core.keyword_identical_QMARK_;
var expr__30113 = k__4309__auto__;
if(cljs.core.truth_(pred__30112.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),expr__30113))){
return (new instaparse.core.Parser(G__30101,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30112.call(null,new cljs.core.Keyword(null,"start-production","start-production",687546537),expr__30113))){
return (new instaparse.core.Parser(self__.grammar,G__30101,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30112.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),expr__30113))){
return (new instaparse.core.Parser(self__.grammar,self__.start_production,G__30101,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__30101),null));
}
}
}
});

instaparse.core.Parser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-production","start-production",687546537),self__.start_production,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"output-format","output-format",-1826382676),self__.output_format,null))], null),self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__30101){
var self__ = this;
var this__4300__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,G__30101,self__.__extmap,self__.__hash));
});

instaparse.core.Parser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

instaparse.core.Parser.prototype.call = (function() {
var G__30117 = null;
var G__30117__2 = (function (self__,text){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text);
});
var G__30117__4 = (function (self__,text,key1,val1){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,key1,val1);
});
var G__30117__6 = (function (self__,text,key1,val1,key2,val2){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2);
});
var G__30117__8 = (function (self__,text,key1,val1,key2,val2,key3,val3){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2,key3,val3);
});
var G__30117__10 = (function (self__,text,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h);
});
var G__30117__12 = (function (self__,text,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j);
});
var G__30117__14 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l);
});
var G__30117__16 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});
var G__30117__18 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
var G__30117__20 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
var G__30117__22 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return cljs.core.apply.call(null,instaparse.core.parse,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more);
});
G__30117 = function(self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more){
switch(arguments.length){
case 2:
return G__30117__2.call(this,self__,text);
case 4:
return G__30117__4.call(this,self__,text,a,b);
case 6:
return G__30117__6.call(this,self__,text,a,b,c,d);
case 8:
return G__30117__8.call(this,self__,text,a,b,c,d,e,f);
case 10:
return G__30117__10.call(this,self__,text,a,b,c,d,e,f,g,h);
case 12:
return G__30117__12.call(this,self__,text,a,b,c,d,e,f,g,h,i,j);
case 14:
return G__30117__14.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l);
case 16:
return G__30117__16.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 18:
return G__30117__18.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 20:
return G__30117__20.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 22:
return G__30117__22.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__30117.cljs$core$IFn$_invoke$arity$2 = G__30117__2;
G__30117.cljs$core$IFn$_invoke$arity$4 = G__30117__4;
G__30117.cljs$core$IFn$_invoke$arity$6 = G__30117__6;
G__30117.cljs$core$IFn$_invoke$arity$8 = G__30117__8;
G__30117.cljs$core$IFn$_invoke$arity$10 = G__30117__10;
G__30117.cljs$core$IFn$_invoke$arity$12 = G__30117__12;
G__30117.cljs$core$IFn$_invoke$arity$14 = G__30117__14;
G__30117.cljs$core$IFn$_invoke$arity$16 = G__30117__16;
G__30117.cljs$core$IFn$_invoke$arity$18 = G__30117__18;
G__30117.cljs$core$IFn$_invoke$arity$20 = G__30117__20;
G__30117.cljs$core$IFn$_invoke$arity$22 = G__30117__22;
return G__30117;
})()
;

instaparse.core.Parser.prototype.apply = (function (self__,args30106){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args30106)));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$1 = (function (text){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$3 = (function (text,key1,val1){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,key1,val1);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$5 = (function (text,key1,val1,key2,val2){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$7 = (function (text,key1,val1,key2,val2,key3,val3){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2,key3,val3);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$9 = (function (text,a,b,c,d,e,f,g,h){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$11 = (function (text,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$13 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$15 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$17 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$19 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$21 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more){
var self__ = this;
var parser = this;
return cljs.core.apply.call(null,instaparse.core.parse,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more);
});

instaparse.core.Parser.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"grammar","grammar",-773107502,null),new cljs.core.Symbol(null,"start-production","start-production",-1966889232,null),new cljs.core.Symbol(null,"output-format","output-format",-185851149,null)], null);
});

instaparse.core.Parser.cljs$lang$type = true;

instaparse.core.Parser.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"instaparse.core/Parser",null,(1),null));
});

instaparse.core.Parser.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"instaparse.core/Parser");
});

/**
 * Positional factory function for instaparse.core/Parser.
 */
instaparse.core.__GT_Parser = (function instaparse$core$__GT_Parser(grammar,start_production,output_format){
return (new instaparse.core.Parser(grammar,start_production,output_format,null,null,null));
});

/**
 * Factory function for instaparse.core/Parser, taking a map of keywords to field values.
 */
instaparse.core.map__GT_Parser = (function instaparse$core$map__GT_Parser(G__30105){
var extmap__4340__auto__ = (function (){var G__30115 = cljs.core.dissoc.call(null,G__30105,new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"start-production","start-production",687546537),new cljs.core.Keyword(null,"output-format","output-format",-1826382676));
if(cljs.core.record_QMARK_.call(null,G__30105)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__30115);
} else {
return G__30115;
}
})();
return (new instaparse.core.Parser(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(G__30105),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(G__30105),new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(G__30105),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (parser,writer,_){
var parser__$1 = this;
return cljs.core._write.call(null,writer,instaparse.print.Parser__GT_str.call(null,parser__$1));
});
/**
 * Takes a string specification of a context-free grammar,
 *   or a URI for a text file containing such a specification (Clj only),
 *   or a map of parser combinators and returns a parser for that grammar.
 * 
 *   Optional keyword arguments:
 *   :input-format :ebnf
 *   or
 *   :input-format :abnf
 * 
 *   :output-format :enlive
 *   or
 *   :output-format :hiccup
 * 
 *   :start :keyword (where :keyword is name of starting production rule)
 * 
 *   :string-ci true (treat all string literals as case insensitive)
 * 
 *   :auto-whitespace (:standard or :comma)
 *   or
 *   :auto-whitespace custom-whitespace-parser
 * 
 *   Clj only:
 *   :no-slurp true (disables use of slurp to auto-detect whether
 *                input is a URI.  When using this option, input
 *                must be a grammar string or grammar map.  Useful
 *                for platforms where slurp is slow or not available.)
 */
instaparse.core.parser = (function instaparse$core$parser(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30128 = arguments.length;
var i__4642__auto___30129 = (0);
while(true){
if((i__4642__auto___30129 < len__4641__auto___30128)){
args__4647__auto__.push((arguments[i__4642__auto___30129]));

var G__30130 = (i__4642__auto___30129 + (1));
i__4642__auto___30129 = G__30130;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic = (function (grammar_specification,p__30120){
var map__30121 = p__30120;
var map__30121__$1 = (((((!((map__30121 == null))))?(((((map__30121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30121):map__30121);
var options = map__30121__$1;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"ebnf","ebnf",31967825),null,new cljs.core.Keyword(null,"abnf","abnf",-152462052),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"input-format","input-format",-422703481)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :ebnf :abnf} (get options :input-format))"));
}

if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"output-format","output-format",-1826382676)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :hiccup :enlive} (get options :output-format))"));
}

if((function (){var ws_parser = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317));
return (((ws_parser == null)) || (cljs.core.contains_QMARK_.call(null,instaparse.core.standard_whitespace_parsers,ws_parser)) || (((cljs.core.map_QMARK_.call(null,ws_parser)) && (cljs.core.contains_QMARK_.call(null,ws_parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267))) && (cljs.core.contains_QMARK_.call(null,ws_parser,new cljs.core.Keyword(null,"start-production","start-production",687546537))))));
})()){
} else {
throw (new Error("Assert failed: (let [ws-parser (get options :auto-whitespace)] (or (nil? ws-parser) (contains? standard-whitespace-parsers ws-parser) (and (map? ws-parser) (contains? ws-parser :grammar) (contains? ws-parser :start-production))))"));
}

var input_format = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"input-format","input-format",-422703481),instaparse.core._STAR_default_input_format_STAR_);
var build_parser = ((function (input_format,map__30121,map__30121__$1,options){
return (function (spec,output_format){
var _STAR_case_insensitive_literals_STAR__orig_val__30123 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
var _STAR_case_insensitive_literals_STAR__temp_val__30124 = new cljs.core.Keyword(null,"string-ci","string-ci",374631805).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"default","default",-1987822328));
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__temp_val__30124;

try{var G__30125 = input_format;
var G__30125__$1 = (((G__30125 instanceof cljs.core.Keyword))?G__30125.fqn:null);
switch (G__30125__$1) {
case "abnf":
return instaparse.abnf.build_parser.call(null,spec,output_format);

break;
case "ebnf":
return instaparse.cfg.build_parser.call(null,spec,output_format);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30125__$1)].join('')));

}
}finally {instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__orig_val__30123;
}});})(input_format,map__30121,map__30121__$1,options))
;
var output_format = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),instaparse.core._STAR_default_output_format_STAR_);
var start = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"start","start",-355208981),null);
var built_parser = ((typeof grammar_specification === 'string')?(function (){var parser = build_parser.call(null,grammar_specification,output_format);
if(cljs.core.truth_(start)){
return instaparse.core.map__GT_Parser.call(null,cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"start-production","start-production",687546537),start));
} else {
return instaparse.core.map__GT_Parser.call(null,parser);
}
})():((cljs.core.map_QMARK_.call(null,grammar_specification))?(function (){var parser = instaparse.cfg.build_parser_from_combinators.call(null,grammar_specification,output_format,start);
return instaparse.core.map__GT_Parser.call(null,parser);
})():((cljs.core.vector_QMARK_.call(null,grammar_specification))?(function (){var start__$1 = (cljs.core.truth_(start)?start:grammar_specification.call(null,(0)));
var parser = instaparse.cfg.build_parser_from_combinators.call(null,cljs.core.apply.call(null,cljs.core.hash_map,grammar_specification),output_format,start__$1);
return instaparse.core.map__GT_Parser.call(null,parser);
})():instaparse.util.throw_illegal_argument_exception.call(null,"Expected string, map, or vector as grammar specification, got ",cljs.core.pr_str.call(null,grammar_specification))
)));
var auto_whitespace = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317));
var whitespace_parser = (((auto_whitespace instanceof cljs.core.Keyword))?cljs.core.get.call(null,instaparse.core.standard_whitespace_parsers,auto_whitespace):auto_whitespace);
var temp__5718__auto__ = whitespace_parser;
if(cljs.core.truth_(temp__5718__auto__)){
var map__30126 = temp__5718__auto__;
var map__30126__$1 = (((((!((map__30126 == null))))?(((((map__30126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30126):map__30126);
var ws_grammar = cljs.core.get.call(null,map__30126__$1,new cljs.core.Keyword(null,"grammar","grammar",1881328267));
var ws_start = cljs.core.get.call(null,map__30126__$1,new cljs.core.Keyword(null,"start-production","start-production",687546537));
return cljs.core.assoc.call(null,built_parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.auto_whitespace.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(built_parser),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(built_parser),ws_grammar,ws_start));
} else {
return built_parser;
}
});

instaparse.core.parser.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
instaparse.core.parser.cljs$lang$applyTo = (function (seq30118){
var G__30119 = cljs.core.first.call(null,seq30118);
var seq30118__$1 = cljs.core.next.call(null,seq30118);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30119,seq30118__$1);
});

/**
 * Tests whether a parse result is a failure.
 */
instaparse.core.failure_QMARK_ = (function instaparse$core$failure_QMARK_(result){
return (((result instanceof instaparse.gll.failure_type)) || ((cljs.core.meta.call(null,result) instanceof instaparse.gll.failure_type)));
});
/**
 * Extracts failure object from failed parse result.
 */
instaparse.core.get_failure = (function instaparse$core$get_failure(result){
if((result instanceof instaparse.gll.failure_type)){
return result;
} else {
if((cljs.core.meta.call(null,result) instanceof instaparse.gll.failure_type)){
return cljs.core.meta.call(null,result);
} else {
return null;

}
}
});
instaparse.core.standard_whitespace_parsers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"standard","standard",-1769206695),instaparse.core.parser.call(null,"whitespace = #'\\s+'"),new cljs.core.Keyword(null,"comma","comma",1699024745),instaparse.core.parser.call(null,"whitespace = #'[,\\s]+'")], null);
instaparse.core.transform = instaparse.transform.transform;
instaparse.core.add_line_and_column_info_to_metadata = instaparse.line_col.add_line_col_spans;
instaparse.core.span = instaparse.viz.span;

//# sourceMappingURL=core.js.map
