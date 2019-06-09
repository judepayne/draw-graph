// Compiled by ClojureScript 1.10.520 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x43473_43474 = value;
x43473_43474.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x43476_43477 = value;
x43476_43477.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x43479_43480 = value;
x43479_43480.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_.call(null,value)) && (cljs.core._EQ_.call(null,(value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43487 = arguments.length;
var i__4731__auto___43488 = (0);
while(true){
if((i__4731__auto___43488 < len__4730__auto___43487)){
args__4736__auto__.push((arguments[i__4731__auto___43488]));

var G__43489 = (i__4731__auto___43488 + (1));
i__4731__auto___43488 = G__43489;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__43483_43490 = cljs.core.seq.call(null,items);
var chunk__43484_43491 = null;
var count__43485_43492 = (0);
var i__43486_43493 = (0);
while(true){
if((i__43486_43493 < count__43485_43492)){
var item_43494 = cljs.core._nth.call(null,chunk__43484_43491,i__43486_43493);
if((!((item_43494 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_43494)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_43494)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_43494));
}
} else {
}


var G__43495 = seq__43483_43490;
var G__43496 = chunk__43484_43491;
var G__43497 = count__43485_43492;
var G__43498 = (i__43486_43493 + (1));
seq__43483_43490 = G__43495;
chunk__43484_43491 = G__43496;
count__43485_43492 = G__43497;
i__43486_43493 = G__43498;
continue;
} else {
var temp__5720__auto___43499 = cljs.core.seq.call(null,seq__43483_43490);
if(temp__5720__auto___43499){
var seq__43483_43500__$1 = temp__5720__auto___43499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43483_43500__$1)){
var c__4550__auto___43501 = cljs.core.chunk_first.call(null,seq__43483_43500__$1);
var G__43502 = cljs.core.chunk_rest.call(null,seq__43483_43500__$1);
var G__43503 = c__4550__auto___43501;
var G__43504 = cljs.core.count.call(null,c__4550__auto___43501);
var G__43505 = (0);
seq__43483_43490 = G__43502;
chunk__43484_43491 = G__43503;
count__43485_43492 = G__43504;
i__43486_43493 = G__43505;
continue;
} else {
var item_43506 = cljs.core.first.call(null,seq__43483_43500__$1);
if((!((item_43506 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_43506)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_43506)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_43506));
}
} else {
}


var G__43507 = cljs.core.next.call(null,seq__43483_43500__$1);
var G__43508 = null;
var G__43509 = (0);
var G__43510 = (0);
seq__43483_43490 = G__43507;
chunk__43484_43491 = G__43508;
count__43485_43492 = G__43509;
i__43486_43493 = G__43510;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq43482){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43482));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43518 = arguments.length;
var i__4731__auto___43519 = (0);
while(true){
if((i__4731__auto___43519 < len__4730__auto___43518)){
args__4736__auto__.push((arguments[i__4731__auto___43519]));

var G__43520 = (i__4731__auto___43519 + (1));
i__4731__auto___43519 = G__43520;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__43514_43521 = cljs.core.seq.call(null,children);
var chunk__43515_43522 = null;
var count__43516_43523 = (0);
var i__43517_43524 = (0);
while(true){
if((i__43517_43524 < count__43516_43523)){
var child_43525 = cljs.core._nth.call(null,chunk__43515_43522,i__43517_43524);
if((!((child_43525 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_43525)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_43525))));
} else {
var temp__5718__auto___43526 = devtools.formatters.helpers.pref.call(null,child_43525);
if(cljs.core.truth_(temp__5718__auto___43526)){
var child_value_43527 = temp__5718__auto___43526;
template.push(child_value_43527);
} else {
}
}
} else {
}


var G__43528 = seq__43514_43521;
var G__43529 = chunk__43515_43522;
var G__43530 = count__43516_43523;
var G__43531 = (i__43517_43524 + (1));
seq__43514_43521 = G__43528;
chunk__43515_43522 = G__43529;
count__43516_43523 = G__43530;
i__43517_43524 = G__43531;
continue;
} else {
var temp__5720__auto___43532 = cljs.core.seq.call(null,seq__43514_43521);
if(temp__5720__auto___43532){
var seq__43514_43533__$1 = temp__5720__auto___43532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43514_43533__$1)){
var c__4550__auto___43534 = cljs.core.chunk_first.call(null,seq__43514_43533__$1);
var G__43535 = cljs.core.chunk_rest.call(null,seq__43514_43533__$1);
var G__43536 = c__4550__auto___43534;
var G__43537 = cljs.core.count.call(null,c__4550__auto___43534);
var G__43538 = (0);
seq__43514_43521 = G__43535;
chunk__43515_43522 = G__43536;
count__43516_43523 = G__43537;
i__43517_43524 = G__43538;
continue;
} else {
var child_43539 = cljs.core.first.call(null,seq__43514_43533__$1);
if((!((child_43539 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_43539)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_43539))));
} else {
var temp__5718__auto___43540 = devtools.formatters.helpers.pref.call(null,child_43539);
if(cljs.core.truth_(temp__5718__auto___43540)){
var child_value_43541 = temp__5718__auto___43540;
template.push(child_value_43541);
} else {
}
}
} else {
}


var G__43542 = cljs.core.next.call(null,seq__43514_43533__$1);
var G__43543 = null;
var G__43544 = (0);
var G__43545 = (0);
seq__43514_43521 = G__43542;
chunk__43515_43522 = G__43543;
count__43516_43523 = G__43544;
i__43517_43524 = G__43545;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq43511){
var G__43512 = cljs.core.first.call(null,seq43511);
var seq43511__$1 = cljs.core.next.call(null,seq43511);
var G__43513 = cljs.core.first.call(null,seq43511__$1);
var seq43511__$2 = cljs.core.next.call(null,seq43511__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43512,G__43513,seq43511__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43548 = arguments.length;
var i__4731__auto___43549 = (0);
while(true){
if((i__4731__auto___43549 < len__4730__auto___43548)){
args__4736__auto__.push((arguments[i__4731__auto___43549]));

var G__43550 = (i__4731__auto___43549 + (1));
i__4731__auto___43549 = G__43550;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq43546){
var G__43547 = cljs.core.first.call(null,seq43546);
var seq43546__$1 = cljs.core.next.call(null,seq43546);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43547,seq43546__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43553 = arguments.length;
var i__4731__auto___43554 = (0);
while(true){
if((i__4731__auto___43554 < len__4730__auto___43553)){
args__4736__auto__.push((arguments[i__4731__auto___43554]));

var G__43555 = (i__4731__auto___43554 + (1));
i__4731__auto___43554 = G__43555;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq43551){
var G__43552 = cljs.core.first.call(null,seq43551);
var seq43551__$1 = cljs.core.next.call(null,seq43551);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43552,seq43551__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__43557 = arguments.length;
switch (G__43557) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj43559 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4131__auto__ = start_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()});
return obj43559;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43567 = arguments.length;
var i__4731__auto___43568 = (0);
while(true){
if((i__4731__auto___43568 < len__4730__auto___43567)){
args__4736__auto__.push((arguments[i__4731__auto___43568]));

var G__43569 = (i__4731__auto___43568 + (1));
i__4731__auto___43568 = G__43569;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__43563){
var vec__43564 = p__43563;
var state_override_fn = cljs.core.nth.call(null,vec__43564,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = (((!((state_override_fn == null))))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq43561){
var G__43562 = cljs.core.first.call(null,seq43561);
var seq43561__$1 = cljs.core.next.call(null,seq43561);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43562,seq43561__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__43570 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__43571 = (1);
cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__43571;

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__43570;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__43572 = name;
switch (G__43572) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__43574 = tag;
var html_tag = cljs.core.nth.call(null,vec__43574,(0),null);
var style = cljs.core.nth.call(null,vec__43574,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_.call(null,markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__43577 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__43578 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));
devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__43578;

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__43577;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__43579 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__43580 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__43581 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__43582 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__43581;

devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__43582;

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__43580;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__43579;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.call(null,value),"initial value: ",devtools.util.pprint_str.call(null,initial_value)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__43583 = initial_value;
var G__43584 = value.call(null);
initial_value = G__43583;
value = G__43584;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__43585 = initial_value;
var G__43586 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__43585;
value = G__43586;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__43587 = initial_value;
var G__43588 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__43587;
value = G__43588;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_.call(null,value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map
