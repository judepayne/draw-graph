// Compiled by ClojureScript 1.10.520 {}
goog.provide('markdown.links');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('markdown.common');
markdown.links.href = (function markdown$links$href(text,link,state){
var vec__10113 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),link);
var link__$1 = cljs.core.nth.call(null,vec__10113,(0),null);
var title = cljs.core.nth.call(null,vec__10113,(1),null);
return markdown.common.freeze_string.call(null,cljs.core.seq.call(null,"<a href='"),link__$1,cljs.core.seq.call(null,"'"),(cljs.core.truth_(cljs.core.not_empty.call(null,title))?cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.str," title=",clojure.string.join.call(null,cljs.core.rest.call(null,title)),">")):cljs.core.seq.call(null,">")),text,cljs.core.seq.call(null,"</a>"),state);
});
markdown.links.img = (function markdown$links$img(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10124 = arguments.length;
var i__4731__auto___10125 = (0);
while(true){
if((i__4731__auto___10125 < len__4730__auto___10124)){
args__4736__auto__.push((arguments[i__4731__auto___10125]));

var G__10126 = (i__4731__auto___10125 + (1));
i__4731__auto___10125 = G__10126;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

markdown.links.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,state,p__10120){
var vec__10121 = p__10120;
var title = cljs.core.nth.call(null,vec__10121,(0),null);
return markdown.common.freeze_string.call(null,cljs.core.seq.call(null,"<img src=\""),url,cljs.core.seq.call(null,"\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty.call(null,title))?cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.str,"\" title=",clojure.string.join.call(null,title)," />")):cljs.core.seq.call(null,"\" />")),state);
});

markdown.links.img.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
markdown.links.img.cljs$lang$applyTo = (function (seq10116){
var G__10117 = cljs.core.first.call(null,seq10116);
var seq10116__$1 = cljs.core.next.call(null,seq10116);
var G__10118 = cljs.core.first.call(null,seq10116__$1);
var seq10116__$2 = cljs.core.next.call(null,seq10116__$1);
var G__10119 = cljs.core.first.call(null,seq10116__$2);
var seq10116__$3 = cljs.core.next.call(null,seq10116__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10117,G__10118,G__10119,seq10116__$3);
});

markdown.links.handle_img_link = (function markdown$links$handle_img_link(xs,state){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.call(null,(3),xs))){
var xs__$1 = cljs.core.drop.call(null,(3),xs);
var vec__10127 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.call(null,vec__10127,(0),null);
var xy = cljs.core.nth.call(null,vec__10127,(1),null);
var vec__10130 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),cljs.core.drop.call(null,(2),xy));
var url_title = cljs.core.nth.call(null,vec__10130,(0),null);
var zy = cljs.core.nth.call(null,vec__10130,(1),null);
var vec__10133 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.call(null,vec__10133,(0),null);
var title = cljs.core.nth.call(null,vec__10133,(1),null);
var vec__10136 = markdown.links.img.call(null,alt,url,state,cljs.core.not_empty.call(null,title));
var new_text = cljs.core.nth.call(null,vec__10136,(0),null);
var new_state = cljs.core.nth.call(null,vec__10136,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,"[",new_text,cljs.core.rest.call(null,zy)),new_state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,state], null);
}
});
markdown.links.process_link_title = (function markdown$links$process_link_title(title,state){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p1__10140_SHARP_,p2__10139_SHARP_){
return cljs.core.apply.call(null,p2__10139_SHARP_,p1__10140_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.italics,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough], null)));
});
markdown.links.make_link = (function markdown$links$make_link(img_QMARK_){
return (function markdown$links$make_link_$_link(text,p__10141){
var map__10142 = p__10141;
var map__10142__$1 = (((((!((map__10142 == null))))?(((((map__10142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10142):map__10142);
var state = map__10142__$1;
var code = cljs.core.get.call(null,map__10142__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__10142__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__4131__auto__ = code;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq.call(null,text);
var loop_state = state;
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,out),loop_state], null);
} else {
var vec__10168 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.call(null,vec__10168,(0),null);
var xs = cljs.core.nth.call(null,vec__10168,(1),null);
var vec__10171 = markdown.links.handle_img_link.call(null,xs,loop_state);
var xs__$1 = cljs.core.nth.call(null,vec__10171,(0),null);
var loop_state__$1 = cljs.core.nth.call(null,vec__10171,(1),null);
var vec__10174 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.call(null,vec__10174,(0),null);
var ys = cljs.core.nth.call(null,vec__10174,(1),null);
var vec__10177 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.call(null,vec__10177,(0),null);
var zs = cljs.core.nth.call(null,vec__10177,(1),null);
var vec__10180 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.call(null,vec__10180,(0),null);
var tail = cljs.core.nth.call(null,vec__10180,(1),null);
if((((cljs.core.count.call(null,link__$1) < (2))) || ((cljs.core.count.call(null,tail) < (1))) || ((cljs.core.count.call(null,dud) > (1))))){
var G__10192 = cljs.core.concat.call(null,out,head,markdown.links.process_link_title.call(null,title,state),dud,link__$1);
var G__10193 = tail;
var G__10194 = loop_state__$1;
out = G__10192;
tokens = G__10193;
loop_state = G__10194;
continue;
} else {
if(((cljs.core.not.call(null,img_QMARK_)) && (cljs.core.not_EQ_.call(null,cljs.core.last.call(null,head),"!")))){
var vec__10183 = markdown.links.href.call(null,cljs.core.rest.call(null,markdown.links.process_link_title.call(null,title,state)),cljs.core.rest.call(null,link__$1),loop_state__$1);
var link_text = cljs.core.nth.call(null,vec__10183,(0),null);
var new_loop_state = cljs.core.nth.call(null,vec__10183,(1),null);
var G__10195 = cljs.core.concat.call(null,out,head,link_text);
var G__10196 = cljs.core.rest.call(null,tail);
var G__10197 = new_loop_state;
out = G__10195;
tokens = G__10196;
loop_state = G__10197;
continue;
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = img_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,cljs.core.last.call(null,head),"!");
} else {
return and__4120__auto__;
}
})())){
var alt = cljs.core.rest.call(null,title);
var vec__10186 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),cljs.core.rest.call(null,link__$1));
var url = cljs.core.nth.call(null,vec__10186,(0),null);
var title__$1 = cljs.core.nth.call(null,vec__10186,(1),null);
var title__$2 = markdown.links.process_link_title.call(null,clojure.string.join.call(null,cljs.core.rest.call(null,title__$1)),loop_state__$1);
var vec__10189 = markdown.links.img.call(null,alt,url,loop_state__$1,title__$2);
var img_text = cljs.core.nth.call(null,vec__10189,(0),null);
var new_loop_state = cljs.core.nth.call(null,vec__10189,(1),null);
var G__10198 = cljs.core.concat.call(null,out,cljs.core.butlast.call(null,head),img_text);
var G__10199 = cljs.core.rest.call(null,tail);
var G__10200 = new_loop_state;
out = G__10198;
tokens = G__10199;
loop_state = G__10200;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,cljs.core.concat.call(null,out,tokens)),loop_state__$1], null);

}
}
}
}
break;
}
}
});
});
markdown.links.link = markdown.links.make_link.call(null,false);
markdown.links.image = markdown.links.make_link.call(null,true);
markdown.links.reference = (function markdown$links$reference(text){
return cljs.core.re_find.call(null,/^\[[a-zA-Z0-9 \-_\.]+\]:/,text);
});
markdown.links.parse_reference = (function markdown$links$parse_reference(reference,start){
return clojure.string.split.call(null,clojure.string.trim.call(null,cljs.core.subs.call(null,reference,start)),/\s+/,(2));
});
markdown.links.parse_reference_link = (function markdown$links$parse_reference_link(line,references){
var trimmed = clojure.string.trim.call(null,line);
var temp__5720__auto__ = markdown.links.reference.call(null,trimmed);
if(cljs.core.truth_(temp__5720__auto__)){
var link = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,references,cljs.core.assoc,cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1))),markdown.links.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.links.replace_reference_link = (function markdown$links$replace_reference_link(references,reference){
var vec__10201 = clojure.string.split.call(null,reference,/\]\s*/,(2));
var title = cljs.core.nth.call(null,vec__10201,(0),null);
var id = cljs.core.nth.call(null,vec__10201,(1),null);
var vec__10204 = cljs.core.get.call(null,references,id);
var link = cljs.core.nth.call(null,vec__10204,(0),null);
var alt = cljs.core.nth.call(null,vec__10204,(1),null);
return ["<a href='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link),"'",(cljs.core.truth_(alt)?[" title='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,alt,(1),(cljs.core.count.call(null,alt) - (1)))),"'"].join(''):null),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,title,(1))),"</a>"].join('');
});
markdown.links.encode_links = (function markdown$links$encode_links(links,i){
return cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__10207,link){
var vec__10208 = p__10207;
var i__$1 = cljs.core.nth.call(null,vec__10208,(0),null);
var encoded = cljs.core.nth.call(null,vec__10208,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i__$1 + (1)),cljs.core.assoc.call(null,encoded,markdown.common.gen_token.call(null,i__$1),link)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.PersistentArrayMap.EMPTY], null),links));
});
markdown.links.parse_links = (function markdown$links$parse_links(references,links){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10211){
var vec__10212 = p__10211;
var k = cljs.core.nth.call(null,vec__10212,(0),null);
var v = cljs.core.nth.call(null,vec__10212,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,markdown.links.replace_reference_link.call(null,references,v)], null);
}),links));
});
markdown.links.freeze_links = (function markdown$links$freeze_links(references,text,state){
var links = cljs.core.re_seq.call(null,/\[[^\]]+\]\s*\[[a-zA-Z0-9 \-_\.]+\]/,text);
var encoded_links = markdown.links.encode_links.call(null,links,cljs.core.fnil.call(null,cljs.core.count,cljs.core.PersistentVector.EMPTY).call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,((function (links,encoded_links){
return (function (s,p__10215){
var vec__10216 = p__10215;
var id = cljs.core.nth.call(null,vec__10216,(0),null);
var link = cljs.core.nth.call(null,vec__10216,(1),null);
return clojure.string.replace.call(null,s,link,id);
});})(links,encoded_links))
,text,encoded_links),cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),cljs.core.merge,markdown.links.parse_links.call(null,references,encoded_links))], null);
});
markdown.links.reference_link = (function markdown$links$reference_link(text,p__10219){
var map__10220 = p__10219;
var map__10220__$1 = (((((!((map__10220 == null))))?(((((map__10220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10220):map__10220);
var state = map__10220__$1;
var code = cljs.core.get.call(null,map__10220__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__10220__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var references = cljs.core.get.call(null,map__10220__$1,new cljs.core.Keyword(null,"references","references",882562509));
if(cljs.core.truth_((function (){var or__4131__auto__ = (references == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = code;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.reference.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
return markdown.links.freeze_links.call(null,references,text,state);

}
}
});
markdown.links.implicit_reference_link = (function markdown$links$implicit_reference_link(text,state){
var replacement_text = clojure.string.replace.call(null,text,/\[([^\]]+)\]\[\]/,"[$1][$1]");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replacement_text,state], null);
});
markdown.links.footnote = (function markdown$links$footnote(text){
return cljs.core.re_find.call(null,/^\[\^[a-zA-Z0-9_-]+\]:/,text);
});
markdown.links.parse_footnote_link = (function markdown$links$parse_footnote_link(line,footnotes){
var trimmed = clojure.string.trim.call(null,line);
var temp__5720__auto__ = markdown.links.footnote.call(null,trimmed);
if(cljs.core.truth_(temp__5720__auto__)){
var link = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,footnotes,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1)))], null),markdown.links.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.links.replace_footnote_link = (function markdown$links$replace_footnote_link(footnotes,footnote){
var next_fn_id = new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636).cljs$core$IFn$_invoke$arity$1(footnotes);
var link = ["#fn-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id)].join('');
return ["<a href='",link,"' id='fnref",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),"'><sup>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),"</sup></a>"].join('');
});
markdown.links.replace_all_footnote_links = (function markdown$links$replace_all_footnote_links(text,p__10222){
while(true){
var map__10223 = p__10222;
var map__10223__$1 = (((((!((map__10223 == null))))?(((((map__10223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10223):map__10223);
var state = map__10223__$1;
var footnotes = cljs.core.get.call(null,map__10223__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
var matcher = /\[\^[a-zA-Z0-9_-]+\]/;
var match = cljs.core.re_find.call(null,matcher,text);
if((match == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var next_text = clojure.string.replace_first.call(null,text,matcher,cljs.core.partial.call(null,markdown.links.replace_footnote_link,footnotes));
var next_state = cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null))], null),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),match], null)));
var G__10225 = next_text;
var G__10226 = next_state;
text = G__10225;
p__10222 = G__10226;
continue;
}
break;
}
});
markdown.links.footnote_link = (function markdown$links$footnote_link(text,p__10227){
var map__10228 = p__10227;
var map__10228__$1 = (((((!((map__10228 == null))))?(((((map__10228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10228):map__10228);
var state = map__10228__$1;
var code = cljs.core.get.call(null,map__10228__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__10228__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var footnotes = cljs.core.get.call(null,map__10228__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
if(cljs.core.truth_((function (){var or__4131__auto__ = (new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972).cljs$core$IFn$_invoke$arity$1(footnotes) == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = code;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.footnote.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var vec__10230 = markdown.links.replace_all_footnote_links.call(null,text,state);
var text__$1 = cljs.core.nth.call(null,vec__10230,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__10230,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1,state__$1], null);

}
}
});
markdown.links.make_image_reference = (function markdown$links$make_image_reference(src,alt,title){
var title_text = (cljs.core.truth_(title)?["\" title=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,title)),""].join(''):"\"");
return ["<img src=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"\" alt=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alt),title_text," />"].join('');
});
markdown.links.image_reference_link = (function markdown$links$image_reference_link(text,p__10233){
var map__10234 = p__10233;
var map__10234__$1 = (((((!((map__10234 == null))))?(((((map__10234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10234):map__10234);
var state = map__10234__$1;
var references = cljs.core.get.call(null,map__10234__$1,new cljs.core.Keyword(null,"references","references",882562509));
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(state))) || (cljs.core.empty_QMARK_.call(null,references)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var matcher = /!\[([^\]]+)\]\s*(\[[a-zA-Z0-9 ]+\])/;
var matches = cljs.core.distinct.call(null,cljs.core.re_seq.call(null,matcher,text));
var ms = matches;
var new_text = text;
while(true){
if(cljs.core.seq.call(null,ms)){
var vec__10239 = cljs.core.first.call(null,ms);
var m = cljs.core.nth.call(null,vec__10239,(0),null);
var alt = cljs.core.nth.call(null,vec__10239,(1),null);
var ref = cljs.core.nth.call(null,vec__10239,(2),null);
var refval = cljs.core.get.call(null,references,ref);
var im = markdown.links.make_image_reference.call(null,cljs.core.first.call(null,refval),alt,cljs.core.second.call(null,refval));
var G__10242 = cljs.core.rest.call(null,ms);
var G__10243 = clojure.string.replace.call(null,new_text,m,im);
ms = G__10242;
new_text = G__10243;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_text,state], null);
}
break;
}
}
});

//# sourceMappingURL=links.js.map
