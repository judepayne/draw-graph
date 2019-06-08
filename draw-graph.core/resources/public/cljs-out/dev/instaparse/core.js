// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
instaparse.core._STAR_default_output_format_STAR_ = cljs.core.cst$kw$hiccup;
/**
 * Changes the default output format.  Input should be :hiccup or :enlive
 */
instaparse.core.set_default_output_format_BANG_ = (function instaparse$core$set_default_output_format_BANG_(type){
if(cljs.core.truth_((function (){var fexpr__23175 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hiccup,null,cljs.core.cst$kw$enlive,null], null), null);
return (fexpr__23175.cljs$core$IFn$_invoke$arity$1 ? fexpr__23175.cljs$core$IFn$_invoke$arity$1(type) : fexpr__23175.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:hiccup :enlive} type)"));
}

return instaparse.core._STAR_default_output_format_STAR_ = type;
});
instaparse.core._STAR_default_input_format_STAR_ = cljs.core.cst$kw$ebnf;
/**
 * Changes the default input format.  Input should be :abnf or :ebnf
 */
instaparse.core.set_default_input_format_BANG_ = (function instaparse$core$set_default_input_format_BANG_(type){
if(cljs.core.truth_((function (){var fexpr__23176 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ebnf,null,cljs.core.cst$kw$abnf,null], null), null);
return (fexpr__23176.cljs$core$IFn$_invoke$arity$1 ? fexpr__23176.cljs$core$IFn$_invoke$arity$1(type) : fexpr__23176.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:ebnf :abnf} type)"));
}

return instaparse.core._STAR_default_input_format_STAR_ = type;
});


instaparse.core.unhide_parser = (function instaparse$core$unhide_parser(parser,unhide){
var G__23177 = unhide;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23177)){
return parser;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$content,G__23177)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$grammar,instaparse.combinators_source.unhide_all_content(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tags,G__23177)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$grammar,instaparse.combinators_source.unhide_tags(cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(parser),cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$all,G__23177)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$grammar,instaparse.combinators_source.unhide_all(cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(parser),cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23177)].join('')));

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
var args__4736__auto__ = [];
var len__4730__auto___23185 = arguments.length;
var i__4731__auto___23186 = (0);
while(true){
if((i__4731__auto___23186 < len__4730__auto___23185)){
args__4736__auto__.push((arguments[i__4731__auto___23186]));

var G__23187 = (i__4731__auto___23186 + (1));
i__4731__auto___23186 = G__23187;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__23181){
var map__23182 = p__23181;
var map__23182__$1 = (((((!((map__23182 == null))))?(((((map__23182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23182):map__23182);
var options = map__23182__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.cst$kw$tags,null,cljs.core.cst$kw$content,null,cljs.core.cst$kw$all,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$unhide))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,cljs.core.cst$kw$memory,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$optimize))){
} else {
throw (new Error("Assert failed: (contains? #{nil :memory} (get options :optimize))"));
}

var start_production = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$start,cljs.core.cst$kw$start_DASH_production.cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$partial,false);
var optimize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$optimize,false);
var unhide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$unhide);
var trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$trace,false);
var parser__$1 = instaparse.core.unhide_parser(parser,unhide);
if(cljs.core.truth_(cljs.core.cst$kw$total.cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parse_total(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,(function (){var G__23184 = cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1(G__23184) : instaparse.reduction.node_builders.call(null,G__23184));
})());
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = optimize_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(partial_QMARK_);
} else {
return and__4120__auto__;
}
})())){
var result = instaparse.repeat.try_repeating_parse_strategy(parser__$1,text,start_production);
if(cljs.core.truth_((instaparse.core.failure_QMARK_.cljs$core$IFn$_invoke$arity$1 ? instaparse.core.failure_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : instaparse.core.failure_QMARK_.call(null,result)))){
return instaparse.gll.parse(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);
} else {
return result;
}
} else {
return instaparse.gll.parse(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
}
});

instaparse.core.parse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
instaparse.core.parse.cljs$lang$applyTo = (function (seq23178){
var G__23179 = cljs.core.first(seq23178);
var seq23178__$1 = cljs.core.next(seq23178);
var G__23180 = cljs.core.first(seq23178__$1);
var seq23178__$2 = cljs.core.next(seq23178__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23179,G__23180,seq23178__$2);
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
var args__4736__auto__ = [];
var len__4730__auto___23195 = arguments.length;
var i__4731__auto___23196 = (0);
while(true){
if((i__4731__auto___23196 < len__4730__auto___23195)){
args__4736__auto__.push((arguments[i__4731__auto___23196]));

var G__23197 = (i__4731__auto___23196 + (1));
i__4731__auto___23196 = G__23197;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__23191){
var map__23192 = p__23191;
var map__23192__$1 = (((((!((map__23192 == null))))?(((((map__23192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23192):map__23192);
var options = map__23192__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.cst$kw$tags,null,cljs.core.cst$kw$content,null,cljs.core.cst$kw$all,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$unhide))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

var start_production = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$start,cljs.core.cst$kw$start_DASH_production.cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$partial,false);
var unhide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$unhide);
var trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$trace,false);
var parser__$1 = instaparse.core.unhide_parser(parser,unhide);
if(cljs.core.truth_(cljs.core.cst$kw$total.cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parses_total(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,(function (){var G__23194 = cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1(G__23194) : instaparse.reduction.node_builders.call(null,G__23194));
})());
} else {
return instaparse.gll.parses(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
});

instaparse.core.parses.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
instaparse.core.parses.cljs$lang$applyTo = (function (seq23188){
var G__23189 = cljs.core.first(seq23188);
var seq23188__$1 = cljs.core.next(seq23188);
var G__23190 = cljs.core.first(seq23188__$1);
var seq23188__$2 = cljs.core.next(seq23188__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23189,G__23190,seq23188__$2);
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
instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k23199,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__23204 = k23199;
var G__23204__$1 = (((G__23204 instanceof cljs.core.Keyword))?G__23204.fqn:null);
switch (G__23204__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23199,else__4388__auto__);

}
});

instaparse.core.Parser.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__23205){
var vec__23206 = p__23205;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23206,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23206,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#instaparse.core.Parser{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$grammar,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_production,self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_format,self__.output_format],null))], null),self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23198){
var self__ = this;
var G__23198__$1 = this;
return (new cljs.core.RecordIter((0),G__23198__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grammar,cljs.core.cst$kw$start_DASH_production,cljs.core.cst$kw$output_DASH_format], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

instaparse.core.Parser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

instaparse.core.Parser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.core.Parser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__23209 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-360509877 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__23209(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

instaparse.core.Parser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23200,other23201){
var self__ = this;
var this23200__$1 = this;
return (((!((other23201 == null)))) && ((this23200__$1.constructor === other23201.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23200__$1.grammar,other23201.grammar)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23200__$1.start_production,other23201.start_production)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23200__$1.output_format,other23201.output_format)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23200__$1.__extmap,other23201.__extmap)));
});

instaparse.core.Parser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start_DASH_production,null,cljs.core.cst$kw$grammar,null,cljs.core.cst$kw$output_DASH_format,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

instaparse.core.Parser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__23198){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__23210 = cljs.core.keyword_identical_QMARK_;
var expr__23211 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__23213 = cljs.core.cst$kw$grammar;
var G__23214 = expr__23211;
return (pred__23210.cljs$core$IFn$_invoke$arity$2 ? pred__23210.cljs$core$IFn$_invoke$arity$2(G__23213,G__23214) : pred__23210.call(null,G__23213,G__23214));
})())){
return (new instaparse.core.Parser(G__23198,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23215 = cljs.core.cst$kw$start_DASH_production;
var G__23216 = expr__23211;
return (pred__23210.cljs$core$IFn$_invoke$arity$2 ? pred__23210.cljs$core$IFn$_invoke$arity$2(G__23215,G__23216) : pred__23210.call(null,G__23215,G__23216));
})())){
return (new instaparse.core.Parser(self__.grammar,G__23198,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23217 = cljs.core.cst$kw$output_DASH_format;
var G__23218 = expr__23211;
return (pred__23210.cljs$core$IFn$_invoke$arity$2 ? pred__23210.cljs$core$IFn$_invoke$arity$2(G__23217,G__23218) : pred__23210.call(null,G__23217,G__23218));
})())){
return (new instaparse.core.Parser(self__.grammar,self__.start_production,G__23198,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__23198),null));
}
}
}
});

instaparse.core.Parser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$grammar,self__.grammar,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_production,self__.start_production,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$output_DASH_format,self__.output_format,null))], null),self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__23198){
var self__ = this;
var this__4384__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,G__23198,self__.__extmap,self__.__hash));
});

instaparse.core.Parser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

instaparse.core.Parser.prototype.call = (function() {
var G__23221 = null;
var G__23221__2 = (function (self__,text){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse(parser,text);
});
var G__23221__4 = (function (self__,text,key1,val1){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1], 0));
});
var G__23221__6 = (function (self__,text,key1,val1,key2,val2){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1,key2,val2], 0));
});
var G__23221__8 = (function (self__,text,key1,val1,key2,val2,key3,val3){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1,key2,val2,key3,val3], 0));
});
var G__23221__10 = (function (self__,text,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__23221__12 = (function (self__,text,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__23221__14 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__23221__16 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__23221__18 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__23221__20 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__23221__22 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(instaparse.core.parse,parser,text,a,b,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more], 0));
});
G__23221 = function(self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more){
switch(arguments.length){
case 2:
return G__23221__2.call(this,self__,text);
case 4:
return G__23221__4.call(this,self__,text,a,b);
case 6:
return G__23221__6.call(this,self__,text,a,b,c,d);
case 8:
return G__23221__8.call(this,self__,text,a,b,c,d,e,f);
case 10:
return G__23221__10.call(this,self__,text,a,b,c,d,e,f,g,h);
case 12:
return G__23221__12.call(this,self__,text,a,b,c,d,e,f,g,h,i,j);
case 14:
return G__23221__14.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l);
case 16:
return G__23221__16.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 18:
return G__23221__18.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 20:
return G__23221__20.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 22:
return G__23221__22.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23221.cljs$core$IFn$_invoke$arity$2 = G__23221__2;
G__23221.cljs$core$IFn$_invoke$arity$4 = G__23221__4;
G__23221.cljs$core$IFn$_invoke$arity$6 = G__23221__6;
G__23221.cljs$core$IFn$_invoke$arity$8 = G__23221__8;
G__23221.cljs$core$IFn$_invoke$arity$10 = G__23221__10;
G__23221.cljs$core$IFn$_invoke$arity$12 = G__23221__12;
G__23221.cljs$core$IFn$_invoke$arity$14 = G__23221__14;
G__23221.cljs$core$IFn$_invoke$arity$16 = G__23221__16;
G__23221.cljs$core$IFn$_invoke$arity$18 = G__23221__18;
G__23221.cljs$core$IFn$_invoke$arity$20 = G__23221__20;
G__23221.cljs$core$IFn$_invoke$arity$22 = G__23221__22;
return G__23221;
})()
;

instaparse.core.Parser.prototype.apply = (function (self__,args23203){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23203)));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$1 = (function (text){
var self__ = this;
var parser = this;
return instaparse.core.parse(parser,text);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$3 = (function (text,key1,val1){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$5 = (function (text,key1,val1,key2,val2){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1,key2,val2], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$7 = (function (text,key1,val1,key2,val2,key3,val3){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1,key2,val2,key3,val3], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$9 = (function (text,a,b,c,d,e,f,g,h){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$11 = (function (text,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$13 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$15 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$17 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$19 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$21 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more){
var self__ = this;
var parser = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(instaparse.core.parse,parser,text,a,b,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more], 0));
});

instaparse.core.Parser.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$grammar,cljs.core.cst$sym$start_DASH_production,cljs.core.cst$sym$output_DASH_format], null);
});

instaparse.core.Parser.cljs$lang$type = true;

instaparse.core.Parser.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"instaparse.core/Parser",null,(1),null));
});

instaparse.core.Parser.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"instaparse.core/Parser");
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
instaparse.core.map__GT_Parser = (function instaparse$core$map__GT_Parser(G__23202){
var extmap__4424__auto__ = (function (){var G__23219 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23202,cljs.core.cst$kw$grammar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_production,cljs.core.cst$kw$output_DASH_format], 0));
if(cljs.core.record_QMARK_(G__23202)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23219);
} else {
return G__23219;
}
})();
return (new instaparse.core.Parser(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(G__23202),cljs.core.cst$kw$start_DASH_production.cljs$core$IFn$_invoke$arity$1(G__23202),cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(G__23202),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (parser,writer,_){
var parser__$1 = this;
return cljs.core._write(writer,instaparse.print.Parser__GT_str(parser__$1));
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
var args__4736__auto__ = [];
var len__4730__auto___23232 = arguments.length;
var i__4731__auto___23233 = (0);
while(true){
if((i__4731__auto___23233 < len__4730__auto___23232)){
args__4736__auto__.push((arguments[i__4731__auto___23233]));

var G__23234 = (i__4731__auto___23233 + (1));
i__4731__auto___23233 = G__23234;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic = (function (grammar_specification,p__23224){
var map__23225 = p__23224;
var map__23225__$1 = (((((!((map__23225 == null))))?(((((map__23225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23225):map__23225);
var options = map__23225__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,cljs.core.cst$kw$ebnf,null,cljs.core.cst$kw$abnf,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$input_DASH_format))){
} else {
throw (new Error("Assert failed: (contains? #{nil :ebnf :abnf} (get options :input-format))"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,cljs.core.cst$kw$hiccup,null,cljs.core.cst$kw$enlive,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$output_DASH_format))){
} else {
throw (new Error("Assert failed: (contains? #{nil :hiccup :enlive} (get options :output-format))"));
}

if((function (){var ws_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$auto_DASH_whitespace);
return (((ws_parser == null)) || (cljs.core.contains_QMARK_(instaparse.core.standard_whitespace_parsers,ws_parser)) || (((cljs.core.map_QMARK_(ws_parser)) && (cljs.core.contains_QMARK_(ws_parser,cljs.core.cst$kw$grammar)) && (cljs.core.contains_QMARK_(ws_parser,cljs.core.cst$kw$start_DASH_production)))));
})()){
} else {
throw (new Error("Assert failed: (let [ws-parser (get options :auto-whitespace)] (or (nil? ws-parser) (contains? standard-whitespace-parsers ws-parser) (and (map? ws-parser) (contains? ws-parser :grammar) (contains? ws-parser :start-production))))"));
}

var input_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$input_DASH_format,instaparse.core._STAR_default_input_format_STAR_);
var build_parser = ((function (input_format,map__23225,map__23225__$1,options){
return (function (spec,output_format){
var _STAR_case_insensitive_literals_STAR__orig_val__23227 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
var _STAR_case_insensitive_literals_STAR__temp_val__23228 = cljs.core.cst$kw$string_DASH_ci.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$default);
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__temp_val__23228;

try{var G__23229 = input_format;
var G__23229__$1 = (((G__23229 instanceof cljs.core.Keyword))?G__23229.fqn:null);
switch (G__23229__$1) {
case "abnf":
return instaparse.abnf.build_parser(spec,output_format);

break;
case "ebnf":
return instaparse.cfg.build_parser(spec,output_format);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23229__$1)].join('')));

}
}finally {instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__orig_val__23227;
}});})(input_format,map__23225,map__23225__$1,options))
;
var output_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$output_DASH_format,instaparse.core._STAR_default_output_format_STAR_);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$start,null);
var built_parser = ((typeof grammar_specification === 'string')?(function (){var parser = build_parser(grammar_specification,output_format);
if(cljs.core.truth_(start)){
return instaparse.core.map__GT_Parser(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$start_DASH_production,start));
} else {
return instaparse.core.map__GT_Parser(parser);
}
})():((cljs.core.map_QMARK_(grammar_specification))?(function (){var parser = instaparse.cfg.build_parser_from_combinators(grammar_specification,output_format,start);
return instaparse.core.map__GT_Parser(parser);
})():((cljs.core.vector_QMARK_(grammar_specification))?(function (){var start__$1 = (cljs.core.truth_(start)?start:(grammar_specification.cljs$core$IFn$_invoke$arity$1 ? grammar_specification.cljs$core$IFn$_invoke$arity$1((0)) : grammar_specification.call(null,(0))));
var parser = instaparse.cfg.build_parser_from_combinators(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,grammar_specification),output_format,start__$1);
return instaparse.core.map__GT_Parser(parser);
})():instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected string, map, or vector as grammar specification, got ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([grammar_specification], 0))], 0))
)));
var auto_whitespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$auto_DASH_whitespace);
var whitespace_parser = (((auto_whitespace instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(instaparse.core.standard_whitespace_parsers,auto_whitespace):auto_whitespace);
var temp__5718__auto__ = whitespace_parser;
if(cljs.core.truth_(temp__5718__auto__)){
var map__23230 = temp__5718__auto__;
var map__23230__$1 = (((((!((map__23230 == null))))?(((((map__23230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23230):map__23230);
var ws_grammar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230__$1,cljs.core.cst$kw$grammar);
var ws_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23230__$1,cljs.core.cst$kw$start_DASH_production);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(built_parser,cljs.core.cst$kw$grammar,instaparse.combinators_source.auto_whitespace(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(built_parser),cljs.core.cst$kw$start_DASH_production.cljs$core$IFn$_invoke$arity$1(built_parser),ws_grammar,ws_start));
} else {
return built_parser;
}
});

instaparse.core.parser.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
instaparse.core.parser.cljs$lang$applyTo = (function (seq23222){
var G__23223 = cljs.core.first(seq23222);
var seq23222__$1 = cljs.core.next(seq23222);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23223,seq23222__$1);
});

/**
 * Tests whether a parse result is a failure.
 */
instaparse.core.failure_QMARK_ = (function instaparse$core$failure_QMARK_(result){
return (((result instanceof instaparse.gll.failure_type)) || ((cljs.core.meta(result) instanceof instaparse.gll.failure_type)));
});
/**
 * Extracts failure object from failed parse result.
 */
instaparse.core.get_failure = (function instaparse$core$get_failure(result){
if((result instanceof instaparse.gll.failure_type)){
return result;
} else {
if((cljs.core.meta(result) instanceof instaparse.gll.failure_type)){
return cljs.core.meta(result);
} else {
return null;

}
}
});
instaparse.core.standard_whitespace_parsers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$standard,instaparse.core.parser("whitespace = #'\\s+'"),cljs.core.cst$kw$comma,instaparse.core.parser("whitespace = #'[,\\s]+'")], null);
instaparse.core.transform = instaparse.transform.transform;
instaparse.core.add_line_and_column_info_to_metadata = instaparse.line_col.add_line_col_spans;
instaparse.core.span = instaparse.viz.span;
