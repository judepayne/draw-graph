goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__41143){
var map__41144 = p__41143;
var map__41144__$1 = (((((!((map__41144 == null))))?(((((map__41144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41144):map__41144);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41144__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41144__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41144__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__41146 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__41147 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__41147);

try{var vec__41148 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__41151,transformer){
var vec__41152 = p__41151;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41152,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41152,(1),null);
var G__41155 = text;
var G__41156 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__41155,G__41156) : transformer.call(null,G__41155,G__41156));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4185__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41148,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41148,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__41146);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41214 = arguments.length;
var i__4790__auto___41215 = (0);
while(true){
if((i__4790__auto___41215 < len__4789__auto___41214)){
args__4795__auto__.push((arguments[i__4790__auto___41215]));

var G__41216 = (i__4790__auto___41215 + (1));
i__4790__auto___41215 = G__41216;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq41161){
var G__41162 = cljs.core.first(seq41161);
var seq41161__$1 = cljs.core.next(seq41161);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41162,seq41161__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__41163_41220 = cljs.core.seq(lines);
var chunk__41164_41221 = null;
var count__41165_41222 = (0);
var i__41166_41223 = (0);
while(true){
if((i__41166_41223 < count__41165_41222)){
var line_41224 = chunk__41164_41221.cljs$core$IIndexed$_nth$arity$2(null,i__41166_41223);
markdown.links.parse_reference_link(line_41224,references);


var G__41225 = seq__41163_41220;
var G__41226 = chunk__41164_41221;
var G__41227 = count__41165_41222;
var G__41228 = (i__41166_41223 + (1));
seq__41163_41220 = G__41225;
chunk__41164_41221 = G__41226;
count__41165_41222 = G__41227;
i__41166_41223 = G__41228;
continue;
} else {
var temp__5735__auto___41231 = cljs.core.seq(seq__41163_41220);
if(temp__5735__auto___41231){
var seq__41163_41232__$1 = temp__5735__auto___41231;
if(cljs.core.chunked_seq_QMARK_(seq__41163_41232__$1)){
var c__4609__auto___41233 = cljs.core.chunk_first(seq__41163_41232__$1);
var G__41234 = cljs.core.chunk_rest(seq__41163_41232__$1);
var G__41235 = c__4609__auto___41233;
var G__41236 = cljs.core.count(c__4609__auto___41233);
var G__41237 = (0);
seq__41163_41220 = G__41234;
chunk__41164_41221 = G__41235;
count__41165_41222 = G__41236;
i__41166_41223 = G__41237;
continue;
} else {
var line_41238 = cljs.core.first(seq__41163_41232__$1);
markdown.links.parse_reference_link(line_41238,references);


var G__41239 = cljs.core.next(seq__41163_41232__$1);
var G__41240 = null;
var G__41241 = (0);
var G__41242 = (0);
seq__41163_41220 = G__41239;
chunk__41164_41221 = G__41240;
count__41165_41222 = G__41241;
i__41166_41223 = G__41242;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__41167_41243 = cljs.core.seq(lines);
var chunk__41168_41244 = null;
var count__41169_41245 = (0);
var i__41170_41246 = (0);
while(true){
if((i__41170_41246 < count__41169_41245)){
var line_41247 = chunk__41168_41244.cljs$core$IIndexed$_nth$arity$2(null,i__41170_41246);
markdown.links.parse_footnote_link(line_41247,footnotes);


var G__41248 = seq__41167_41243;
var G__41249 = chunk__41168_41244;
var G__41250 = count__41169_41245;
var G__41251 = (i__41170_41246 + (1));
seq__41167_41243 = G__41248;
chunk__41168_41244 = G__41249;
count__41169_41245 = G__41250;
i__41170_41246 = G__41251;
continue;
} else {
var temp__5735__auto___41252 = cljs.core.seq(seq__41167_41243);
if(temp__5735__auto___41252){
var seq__41167_41253__$1 = temp__5735__auto___41252;
if(cljs.core.chunked_seq_QMARK_(seq__41167_41253__$1)){
var c__4609__auto___41254 = cljs.core.chunk_first(seq__41167_41253__$1);
var G__41255 = cljs.core.chunk_rest(seq__41167_41253__$1);
var G__41256 = c__4609__auto___41254;
var G__41257 = cljs.core.count(c__4609__auto___41254);
var G__41258 = (0);
seq__41167_41243 = G__41255;
chunk__41168_41244 = G__41256;
count__41169_41245 = G__41257;
i__41170_41246 = G__41258;
continue;
} else {
var line_41259 = cljs.core.first(seq__41167_41253__$1);
markdown.links.parse_footnote_link(line_41259,footnotes);


var G__41260 = cljs.core.next(seq__41167_41253__$1);
var G__41261 = null;
var G__41262 = (0);
var G__41263 = (0);
seq__41167_41243 = G__41260;
chunk__41168_41244 = G__41261;
count__41169_41245 = G__41262;
i__41170_41246 = G__41263;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__41175 = cljs.core.split_with((function (p1__41174_SHARP_){
return cljs.core.not_empty(p1__41174_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41175,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41175,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__41182 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__41183 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__41184 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__41185 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__41184);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__41185);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__41186 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41186,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41186,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__41194_41267 = lines__$1;
var vec__41195_41268 = G__41194_41267;
var seq__41196_41269 = cljs.core.seq(vec__41195_41268);
var first__41197_41270 = cljs.core.first(seq__41196_41269);
var seq__41196_41271__$1 = cljs.core.next(seq__41196_41269);
var line_41272 = first__41197_41270;
var more_41273 = seq__41196_41271__$1;
var state_41274 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__41194_41275__$1 = G__41194_41267;
var state_41276__$1 = state_41274;
while(true){
var vec__41201_41277 = G__41194_41275__$1;
var seq__41202_41278 = cljs.core.seq(vec__41201_41277);
var first__41203_41279 = cljs.core.first(seq__41202_41278);
var seq__41202_41280__$1 = cljs.core.next(seq__41202_41278);
var line_41281__$1 = first__41203_41279;
var more_41282__$1 = seq__41202_41280__$1;
var state_41283__$2 = state_41276__$1;
var line_41284__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_41283__$2))?"":line_41281__$1);
var state_41285__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_41283__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_41283__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_41283__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_41283__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_41283__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_41282__$1))){
var G__41288 = more_41282__$1;
var G__41289 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_41284__$2,cljs.core.first(more_41282__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_41285__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_41284__$2));
G__41194_41275__$1 = G__41288;
state_41276__$1 = G__41289;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_41285__$3))),line_41284__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_41285__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__41183);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__41182);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41290 = arguments.length;
var i__4790__auto___41291 = (0);
while(true){
if((i__4790__auto___41291 < len__4789__auto___41290)){
args__4795__auto__.push((arguments[i__4790__auto___41291]));

var G__41292 = (i__4790__auto___41291 + (1));
i__4790__auto___41291 = G__41292;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq41204){
var G__41205 = cljs.core.first(seq41204);
var seq41204__$1 = cljs.core.next(seq41204);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41205,seq41204__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41293 = arguments.length;
var i__4790__auto___41294 = (0);
while(true){
if((i__4790__auto___41294 < len__4789__auto___41293)){
args__4795__auto__.push((arguments[i__4790__auto___41294]));

var G__41295 = (i__4790__auto___41294 + (1));
i__4790__auto___41294 = G__41295;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq41206){
var G__41207 = cljs.core.first(seq41206);
var seq41206__$1 = cljs.core.next(seq41206);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41207,seq41206__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41297 = arguments.length;
var i__4790__auto___41298 = (0);
while(true){
if((i__4790__auto___41298 < len__4789__auto___41297)){
args__4795__auto__.push((arguments[i__4790__auto___41298]));

var G__41299 = (i__4790__auto___41298 + (1));
i__4790__auto___41298 = G__41299;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq41211){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41211));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41300 = arguments.length;
var i__4790__auto___41301 = (0);
while(true){
if((i__4790__auto___41301 < len__4789__auto___41300)){
args__4795__auto__.push((arguments[i__4790__auto___41301]));

var G__41302 = (i__4790__auto___41301 + (1));
i__4790__auto___41301 = G__41302;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq41213){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41213));
}));


//# sourceMappingURL=markdown.core.js.map
