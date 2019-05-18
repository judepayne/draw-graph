// Compiled by ClojureScript 1.10.439 {:target :nashorn}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26665){
var map__26666 = p__26665;
var map__26666__$1 = (((((!((map__26666 == null))))?(((((map__26666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26666):map__26666);
var m = map__26666__$1;
var n = cljs.core.get.call(null,map__26666__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26666__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26668_26690 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26669_26691 = null;
var count__26670_26692 = (0);
var i__26671_26693 = (0);
while(true){
if((i__26671_26693 < count__26670_26692)){
var f_26694 = cljs.core._nth.call(null,chunk__26669_26691,i__26671_26693);
cljs.core.println.call(null,"  ",f_26694);


var G__26695 = seq__26668_26690;
var G__26696 = chunk__26669_26691;
var G__26697 = count__26670_26692;
var G__26698 = (i__26671_26693 + (1));
seq__26668_26690 = G__26695;
chunk__26669_26691 = G__26696;
count__26670_26692 = G__26697;
i__26671_26693 = G__26698;
continue;
} else {
var temp__5720__auto___26699 = cljs.core.seq.call(null,seq__26668_26690);
if(temp__5720__auto___26699){
var seq__26668_26700__$1 = temp__5720__auto___26699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26668_26700__$1)){
var c__4461__auto___26701 = cljs.core.chunk_first.call(null,seq__26668_26700__$1);
var G__26702 = cljs.core.chunk_rest.call(null,seq__26668_26700__$1);
var G__26703 = c__4461__auto___26701;
var G__26704 = cljs.core.count.call(null,c__4461__auto___26701);
var G__26705 = (0);
seq__26668_26690 = G__26702;
chunk__26669_26691 = G__26703;
count__26670_26692 = G__26704;
i__26671_26693 = G__26705;
continue;
} else {
var f_26706 = cljs.core.first.call(null,seq__26668_26700__$1);
cljs.core.println.call(null,"  ",f_26706);


var G__26707 = cljs.core.next.call(null,seq__26668_26700__$1);
var G__26708 = null;
var G__26709 = (0);
var G__26710 = (0);
seq__26668_26690 = G__26707;
chunk__26669_26691 = G__26708;
count__26670_26692 = G__26709;
i__26671_26693 = G__26710;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26711 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26711);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26711)))?cljs.core.second.call(null,arglists_26711):arglists_26711));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26672_26712 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26673_26713 = null;
var count__26674_26714 = (0);
var i__26675_26715 = (0);
while(true){
if((i__26675_26715 < count__26674_26714)){
var vec__26676_26716 = cljs.core._nth.call(null,chunk__26673_26713,i__26675_26715);
var name_26717 = cljs.core.nth.call(null,vec__26676_26716,(0),null);
var map__26679_26718 = cljs.core.nth.call(null,vec__26676_26716,(1),null);
var map__26679_26719__$1 = (((((!((map__26679_26718 == null))))?(((((map__26679_26718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26679_26718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26679_26718):map__26679_26718);
var doc_26720 = cljs.core.get.call(null,map__26679_26719__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26721 = cljs.core.get.call(null,map__26679_26719__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26717);

cljs.core.println.call(null," ",arglists_26721);

if(cljs.core.truth_(doc_26720)){
cljs.core.println.call(null," ",doc_26720);
} else {
}


var G__26722 = seq__26672_26712;
var G__26723 = chunk__26673_26713;
var G__26724 = count__26674_26714;
var G__26725 = (i__26675_26715 + (1));
seq__26672_26712 = G__26722;
chunk__26673_26713 = G__26723;
count__26674_26714 = G__26724;
i__26675_26715 = G__26725;
continue;
} else {
var temp__5720__auto___26726 = cljs.core.seq.call(null,seq__26672_26712);
if(temp__5720__auto___26726){
var seq__26672_26727__$1 = temp__5720__auto___26726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26672_26727__$1)){
var c__4461__auto___26728 = cljs.core.chunk_first.call(null,seq__26672_26727__$1);
var G__26729 = cljs.core.chunk_rest.call(null,seq__26672_26727__$1);
var G__26730 = c__4461__auto___26728;
var G__26731 = cljs.core.count.call(null,c__4461__auto___26728);
var G__26732 = (0);
seq__26672_26712 = G__26729;
chunk__26673_26713 = G__26730;
count__26674_26714 = G__26731;
i__26675_26715 = G__26732;
continue;
} else {
var vec__26681_26733 = cljs.core.first.call(null,seq__26672_26727__$1);
var name_26734 = cljs.core.nth.call(null,vec__26681_26733,(0),null);
var map__26684_26735 = cljs.core.nth.call(null,vec__26681_26733,(1),null);
var map__26684_26736__$1 = (((((!((map__26684_26735 == null))))?(((((map__26684_26735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26684_26735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26684_26735):map__26684_26735);
var doc_26737 = cljs.core.get.call(null,map__26684_26736__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26738 = cljs.core.get.call(null,map__26684_26736__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26734);

cljs.core.println.call(null," ",arglists_26738);

if(cljs.core.truth_(doc_26737)){
cljs.core.println.call(null," ",doc_26737);
} else {
}


var G__26739 = cljs.core.next.call(null,seq__26672_26727__$1);
var G__26740 = null;
var G__26741 = (0);
var G__26742 = (0);
seq__26672_26712 = G__26739;
chunk__26673_26713 = G__26740;
count__26674_26714 = G__26741;
i__26675_26715 = G__26742;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__26686 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26687 = null;
var count__26688 = (0);
var i__26689 = (0);
while(true){
if((i__26689 < count__26688)){
var role = cljs.core._nth.call(null,chunk__26687,i__26689);
var temp__5720__auto___26743__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___26743__$1)){
var spec_26744 = temp__5720__auto___26743__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26744));
} else {
}


var G__26745 = seq__26686;
var G__26746 = chunk__26687;
var G__26747 = count__26688;
var G__26748 = (i__26689 + (1));
seq__26686 = G__26745;
chunk__26687 = G__26746;
count__26688 = G__26747;
i__26689 = G__26748;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__26686);
if(temp__5720__auto____$1){
var seq__26686__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26686__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__26686__$1);
var G__26749 = cljs.core.chunk_rest.call(null,seq__26686__$1);
var G__26750 = c__4461__auto__;
var G__26751 = cljs.core.count.call(null,c__4461__auto__);
var G__26752 = (0);
seq__26686 = G__26749;
chunk__26687 = G__26750;
count__26688 = G__26751;
i__26689 = G__26752;
continue;
} else {
var role = cljs.core.first.call(null,seq__26686__$1);
var temp__5720__auto___26753__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___26753__$2)){
var spec_26754 = temp__5720__auto___26753__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26754));
} else {
}


var G__26755 = cljs.core.next.call(null,seq__26686__$1);
var G__26756 = null;
var G__26757 = (0);
var G__26758 = (0);
seq__26686 = G__26755;
chunk__26687 = G__26756;
count__26688 = G__26757;
i__26689 = G__26758;
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
}
});

//# sourceMappingURL=repl.js.map
