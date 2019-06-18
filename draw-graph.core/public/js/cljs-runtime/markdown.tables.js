goog.provide('markdown.tables');
goog.require('cljs.core');
goog.require('clojure.string');
markdown.tables.parse_table_row = (function markdown$tables$parse_table_row(text){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36264_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),p1__36264_SHARP_], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,(function (){var G__36266 = clojure.string.trim((function (){var fexpr__36267 = (function (p1__36262_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__36262_SHARP_),"|")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(p1__36262_SHARP_));
} else {
return p1__36262_SHARP_;
}
});
return fexpr__36267(text);
})());
var fexpr__36265 = ((function (G__36266){
return (function (p1__36263_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__36263_SHARP_,/\|/);
});})(G__36266))
;
return fexpr__36265(G__36266);
})()));
});
markdown.tables.table_row__GT_str = (function markdown$tables$table_row__GT_str(row_data,is_header_QMARK_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (row,col){
var alignment_str = (cljs.core.truth_(new cljs.core.Keyword(null,"alignment","alignment",1040093386).cljs$core$IFn$_invoke$arity$1(col))?[" align='",cljs.core.name(new cljs.core.Keyword(null,"alignment","alignment",1040093386).cljs$core$IFn$_invoke$arity$1(col)),"'"].join(''):null);
if(cljs.core.truth_(is_header_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),"<th",alignment_str,">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(col)),"</th>"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),"<td",alignment_str,">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(col)),"</td>"].join('');
}
}),"",row_data);
});
markdown.tables.table__GT_str = (function markdown$tables$table__GT_str(table){
var table_data = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table));
var alignment_seq = new cljs.core.Keyword(null,"alignment-seq","alignment-seq",1587946543).cljs$core$IFn$_invoke$arity$1(table);
return ["<table>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (table_data,alignment_seq){
return (function (table_acc,row){
var row_idx = cljs.core.first(row);
var row_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.second(row),alignment_seq);
var is_header_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_idx,(0));
var is_first_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_idx,(1));
var is_last_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_idx,(cljs.core.count(table_data) - (1)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(table_acc),((is_header_QMARK_)?"<thead>":((is_first_row_QMARK_)?"<tbody>":null)),"<tr>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.tables.table_row__GT_str(row_data,is_header_QMARK_)),"</tr>",((is_header_QMARK_)?"</thead>":((is_last_row_QMARK_)?"</tbody>":null))].join('');
});})(table_data,alignment_seq))
,"",table_data)),"</table>"].join('');
});
markdown.tables.divider_seq__GT_alignment = (function markdown$tables$divider_seq__GT_alignment(divider_seq){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (divider){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find(/^:-+/,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(divider)),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(divider))){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alignment","alignment",1040093386),new cljs.core.Keyword(null,"left","left",-399115937)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find(/^-+:/,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(divider)),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(divider))){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alignment","alignment",1040093386),new cljs.core.Keyword(null,"right","right",-452581833)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find(/^:-+:/,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(divider)),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(divider))){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alignment","alignment",1040093386),new cljs.core.Keyword(null,"center","center",-748944368)], null));
} else {
return null;

}
}
}
}),divider_seq);
});
markdown.tables.table = (function markdown$tables$table(text,state){
var table_row_re = cljs.core.re_find(/\|(?: [\S ]+ \|)+/,text);
var table_divider_re = cljs.core.re_find(/\|(?: :?-+:? \|)+/,text);
var is_table_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table_row_re,text);
var is_table_header_QMARK_ = ((is_table_row_QMARK_) && (cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"in-table-body?","in-table-body?",-136773915)], null)))));
var is_table_divider_QMARK_ = (function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table_divider_re,text);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"in-table-body?","in-table-body?",-136773915)], null));
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"is-prev-header?","is-prev-header?",-1637281701)], null));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(is_table_header_QMARK_){
var header_seq = markdown.tables.parse_table_row(text);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"is-prev-header?","is-prev-header?",-1637281701)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"in-table-body?","in-table-body?",-136773915)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.vec(header_seq))], null);
} else {
if(cljs.core.truth_(is_table_divider_QMARK_)){
var divider_seq = markdown.tables.parse_table_row(text);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"is-prev-header?","is-prev-header?",-1637281701)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"alignment-seq","alignment-seq",1587946543)], null),markdown.tables.divider_seq__GT_alignment(divider_seq))], null);
} else {
if(is_table_row_QMARK_){
var row_seq = markdown.tables.parse_table_row(text);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"is-prev-header?","is-prev-header?",-1637281701)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.vec(row_seq))], null);
} else {
var out = ((cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"data","data",-232669377)], null))))?text:[markdown.tables.table__GT_str(new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"table","table",-564943036))], null);

}
}
}
});

//# sourceMappingURL=markdown.tables.js.map
