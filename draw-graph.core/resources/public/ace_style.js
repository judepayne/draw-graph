define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var DgcsvHighlightRules = function() {

    //TODO var builtinFunctions = "";

    this.$rules = {
        "start" : [
                {
                token : "comment",
                regex : "^;.*"
            }, {
                token : "support.function",
                regex : "^h,|^e,|^ce,|^cs|^cp,",
            },{
                token : "constant.numeric", 
                regex : "\\|(.*?)(,(?=[a-zA-Z]))", //non-greedy regex
            },{
                token : "constant.numeric",
                regex : "\\|(.*)$",
            }
        ]

    };
};

oop.inherits(DgcsvHighlightRules, TextHighlightRules);

exports.DgcsvHighlightRules = DgcsvHighlightRules;
});
