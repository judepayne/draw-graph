["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/i18n/uchar.js"],"~:js","goog.provide(\"goog.i18n.uChar\");\n/** @private @type {number} */ goog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_ = 65536;\n/** @private @type {number} */ goog.i18n.uChar.CODE_POINT_MAX_VALUE_ = 1114111;\n/** @private @type {number} */ goog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_ = 55296;\n/** @private @type {number} */ goog.i18n.uChar.LEAD_SURROGATE_MAX_VALUE_ = 56319;\n/** @private @type {number} */ goog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_ = 56320;\n/** @private @type {number} */ goog.i18n.uChar.TRAIL_SURROGATE_MAX_VALUE_ = 57343;\n/** @private @type {number} */ goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_ = 10;\n/**\n @param {string} ch\n @return {string}\n */\ngoog.i18n.uChar.toHexString = function(ch) {\n  var chCode = goog.i18n.uChar.toCharCode(ch);\n  var chCodeStr = \"U+\" + goog.i18n.uChar.padString_(chCode.toString(16).toUpperCase(), 4, \"0\");\n  return chCodeStr;\n};\n/**\n @private\n @param {string} str\n @param {number} length\n @param {string} ch\n @return {string}\n */\ngoog.i18n.uChar.padString_ = function(str, length, ch) {\n  while (str.length < length) {\n    str = ch + str;\n  }\n  return str;\n};\n/**\n @param {string} ch\n @return {number}\n */\ngoog.i18n.uChar.toCharCode = function(ch) {\n  return goog.i18n.uChar.getCodePointAround(ch, 0);\n};\n/**\n @param {number} code\n @return {?string}\n */\ngoog.i18n.uChar.fromCharCode = function(code) {\n  if (!goog.isDefAndNotNull(code) || !(code >= 0 && code <= goog.i18n.uChar.CODE_POINT_MAX_VALUE_)) {\n    return null;\n  }\n  if (goog.i18n.uChar.isSupplementaryCodePoint(code)) {\n    var leadBits = code >> goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_;\n    var trailBits = code & (1 << goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_) - 1;\n    var leadCodePoint = leadBits + (goog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_ - (goog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_ >> goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_));\n    var trailCodePoint = trailBits + goog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_;\n    return String.fromCharCode(leadCodePoint) + String.fromCharCode(trailCodePoint);\n  }\n  return String.fromCharCode(code);\n};\n/**\n @param {string} string\n @param {number} index\n @return {number}\n */\ngoog.i18n.uChar.getCodePointAround = function(string, index) {\n  var charCode = string.charCodeAt(index);\n  if (goog.i18n.uChar.isLeadSurrogateCodePoint(charCode) && index + 1 < string.length) {\n    var trail = string.charCodeAt(index + 1);\n    if (goog.i18n.uChar.isTrailSurrogateCodePoint(trail)) {\n      return (/** @type {number} */ (goog.i18n.uChar.buildSupplementaryCodePoint(charCode, trail)));\n    }\n  } else {\n    if (goog.i18n.uChar.isTrailSurrogateCodePoint(charCode) && index > 0) {\n      var lead = string.charCodeAt(index - 1);\n      if (goog.i18n.uChar.isLeadSurrogateCodePoint(lead)) {\n        var codepoint = /** @type {number} */ (goog.i18n.uChar.buildSupplementaryCodePoint(lead, charCode));\n        return -codepoint;\n      }\n    }\n  }\n  return charCode;\n};\n/**\n @param {number} codePoint\n @return {number}\n */\ngoog.i18n.uChar.charCount = function(codePoint) {\n  return goog.i18n.uChar.isSupplementaryCodePoint(codePoint) ? 2 : 1;\n};\n/**\n @param {number} codePoint\n @return {boolean}\n */\ngoog.i18n.uChar.isSupplementaryCodePoint = function(codePoint) {\n  return codePoint >= goog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_ && codePoint <= goog.i18n.uChar.CODE_POINT_MAX_VALUE_;\n};\n/**\n @param {number} codePoint\n @return {boolean}\n */\ngoog.i18n.uChar.isLeadSurrogateCodePoint = function(codePoint) {\n  return codePoint >= goog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_ && codePoint <= goog.i18n.uChar.LEAD_SURROGATE_MAX_VALUE_;\n};\n/**\n @param {number} codePoint\n @return {boolean}\n */\ngoog.i18n.uChar.isTrailSurrogateCodePoint = function(codePoint) {\n  return codePoint >= goog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_ && codePoint <= goog.i18n.uChar.TRAIL_SURROGATE_MAX_VALUE_;\n};\n/**\n @param {number} lead\n @param {number} trail\n @return {?number}\n */\ngoog.i18n.uChar.buildSupplementaryCodePoint = function(lead, trail) {\n  if (goog.i18n.uChar.isLeadSurrogateCodePoint(lead) && goog.i18n.uChar.isTrailSurrogateCodePoint(trail)) {\n    var shiftedLeadOffset = (lead << goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_) - (goog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_ << goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_);\n    var trailOffset = trail - goog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_ + goog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_;\n    return shiftedLeadOffset + trailOffset;\n  }\n  return null;\n};\n","~:source","// Copyright 2009 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Collection of utility functions for Unicode character.\n *\n */\n\ngoog.provide('goog.i18n.uChar');\n\n\n// Constants for handling Unicode supplementary characters (surrogate pairs).\n\n\n/**\n * The minimum value for Supplementary code points.\n * @type {number}\n * @private\n */\ngoog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_ = 0x10000;\n\n\n/**\n * The highest Unicode code point value (scalar value) according to the Unicode\n * Standard.\n * @type {number}\n * @private\n */\ngoog.i18n.uChar.CODE_POINT_MAX_VALUE_ = 0x10FFFF;\n\n\n/**\n * Lead surrogate minimum value.\n * @type {number}\n * @private\n */\ngoog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_ = 0xD800;\n\n\n/**\n * Lead surrogate maximum value.\n * @type {number}\n * @private\n */\ngoog.i18n.uChar.LEAD_SURROGATE_MAX_VALUE_ = 0xDBFF;\n\n\n/**\n * Trail surrogate minimum value.\n * @type {number}\n * @private\n */\ngoog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_ = 0xDC00;\n\n\n/**\n * Trail surrogate maximum value.\n * @type {number}\n * @private\n */\ngoog.i18n.uChar.TRAIL_SURROGATE_MAX_VALUE_ = 0xDFFF;\n\n\n/**\n * The number of least significant bits of a supplementary code point that in\n * UTF-16 become the least significant bits of the trail surrogate. The rest of\n * the in-use bits of the supplementary code point become the least significant\n * bits of the lead surrogate.\n * @type {number}\n * @private\n */\ngoog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_ = 10;\n\n\n/**\n * Gets the U+ notation string of a Unicode character. Ex: 'U+0041' for 'A'.\n * @param {string} ch The given character.\n * @return {string} The U+ notation of the given character.\n */\ngoog.i18n.uChar.toHexString = function(ch) {\n  var chCode = goog.i18n.uChar.toCharCode(ch);\n  var chCodeStr = 'U+' +\n      goog.i18n.uChar.padString_(chCode.toString(16).toUpperCase(), 4, '0');\n\n  return chCodeStr;\n};\n\n\n/**\n * Gets a string padded with given character to get given size.\n * @param {string} str The given string to be padded.\n * @param {number} length The target size of the string.\n * @param {string} ch The character to be padded with.\n * @return {string} The padded string.\n * @private\n */\ngoog.i18n.uChar.padString_ = function(str, length, ch) {\n  while (str.length < length) {\n    str = ch + str;\n  }\n  return str;\n};\n\n\n/**\n * Gets Unicode value of the given character.\n * @param {string} ch The given character, which in the case of a supplementary\n * character is actually a surrogate pair. The remainder of the string is\n * ignored.\n * @return {number} The Unicode value of the character.\n */\ngoog.i18n.uChar.toCharCode = function(ch) {\n  return goog.i18n.uChar.getCodePointAround(ch, 0);\n};\n\n\n/**\n * Gets a character from the given Unicode value. If the given code point is not\n * a valid Unicode code point, null is returned.\n * @param {number} code The Unicode value of the character.\n * @return {?string} The character corresponding to the given Unicode value.\n */\ngoog.i18n.uChar.fromCharCode = function(code) {\n  if (!goog.isDefAndNotNull(code) ||\n      !(code >= 0 && code <= goog.i18n.uChar.CODE_POINT_MAX_VALUE_)) {\n    return null;\n  }\n  if (goog.i18n.uChar.isSupplementaryCodePoint(code)) {\n    // First, we split the code point into the trail surrogate part (the\n    // TRAIL_SURROGATE_BIT_COUNT_ least significant bits) and the lead surrogate\n    // part (the rest of the bits, shifted down; note that for now this includes\n    // the supplementary offset, also shifted down, to be subtracted off below).\n    var leadBits = code >> goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_;\n    var trailBits = code &\n        // A bit-mask to get the TRAIL_SURROGATE_BIT_COUNT_ (i.e. 10) least\n        // significant bits. 1 << 10 = 0x0400. 0x0400 - 1 = 0x03FF.\n        ((1 << goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_) - 1);\n\n    // Now we calculate the code point of each surrogate by adding each offset\n    // to the corresponding base code point.\n    var leadCodePoint = leadBits +\n        (goog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_ -\n         // Subtract off the supplementary offset, which had been shifted down\n         // with the rest of leadBits. We do this here instead of before the\n         // shift in order to save a separate subtraction step.\n         (goog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_ >>\n          goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_));\n    var trailCodePoint = trailBits + goog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_;\n\n    // Convert the code points into a 2-character long string.\n    return String.fromCharCode(leadCodePoint) +\n        String.fromCharCode(trailCodePoint);\n  }\n  return String.fromCharCode(code);\n};\n\n\n/**\n * Returns the Unicode code point at the specified index.\n *\n * If the char value specified at the given index is in the leading-surrogate\n * range, and the following index is less than the length of `string`, and\n * the char value at the following index is in the trailing-surrogate range,\n * then the supplementary code point corresponding to this surrogate pair is\n * returned.\n *\n * If the char value specified at the given index is in the trailing-surrogate\n * range, and the preceding index is not before the start of `string`, and\n * the char value at the preceding index is in the leading-surrogate range, then\n * the negated supplementary code point corresponding to this surrogate pair is\n * returned.\n *\n * The negation allows the caller to differentiate between the case where the\n * given index is at the leading surrogate and the one where it is at the\n * trailing surrogate, and thus deduce where the next character starts and\n * preceding character ends.\n *\n * Otherwise, the char value at the given index is returned. Thus, a leading\n * surrogate is returned when it is not followed by a trailing surrogate, and a\n * trailing surrogate is returned when it is not preceded by a leading\n * surrogate.\n *\n * @param {string} string The string.\n * @param {number} index The index from which the code point is to be retrieved.\n * @return {number} The code point at the given index. If the given index is\n * that of the start (i.e. lead surrogate) of a surrogate pair, returns the code\n * point encoded by the pair. If the given index is that of the end (i.e. trail\n * surrogate) of a surrogate pair, returns the negated code pointed encoded by\n * the pair.\n */\ngoog.i18n.uChar.getCodePointAround = function(string, index) {\n  var charCode = string.charCodeAt(index);\n  if (goog.i18n.uChar.isLeadSurrogateCodePoint(charCode) &&\n      index + 1 < string.length) {\n    var trail = string.charCodeAt(index + 1);\n    if (goog.i18n.uChar.isTrailSurrogateCodePoint(trail)) {\n      // Part of a surrogate pair.\n      return /** @type {number} */ (\n          goog.i18n.uChar.buildSupplementaryCodePoint(charCode, trail));\n    }\n  } else if (goog.i18n.uChar.isTrailSurrogateCodePoint(charCode) && index > 0) {\n    var lead = string.charCodeAt(index - 1);\n    if (goog.i18n.uChar.isLeadSurrogateCodePoint(lead)) {\n      // Part of a surrogate pair.\n      var codepoint = /** @type {number} */ (\n          goog.i18n.uChar.buildSupplementaryCodePoint(lead, charCode));\n      return -codepoint;\n    }\n  }\n  return charCode;\n};\n\n\n/**\n * Determines the length of the string needed to represent the specified\n * Unicode code point.\n * @param {number} codePoint\n * @return {number} 2 if codePoint is a supplementary character, 1 otherwise.\n */\ngoog.i18n.uChar.charCount = function(codePoint) {\n  return goog.i18n.uChar.isSupplementaryCodePoint(codePoint) ? 2 : 1;\n};\n\n\n/**\n * Determines whether the specified Unicode code point is in the supplementary\n * Unicode characters range.\n * @param {number} codePoint\n * @return {boolean} Whether then given code point is a supplementary character.\n */\ngoog.i18n.uChar.isSupplementaryCodePoint = function(codePoint) {\n  return codePoint >= goog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_ &&\n      codePoint <= goog.i18n.uChar.CODE_POINT_MAX_VALUE_;\n};\n\n\n/**\n * Gets whether the given code point is a leading surrogate character.\n * @param {number} codePoint\n * @return {boolean} Whether the given code point is a leading surrogate\n * character.\n */\ngoog.i18n.uChar.isLeadSurrogateCodePoint = function(codePoint) {\n  return codePoint >= goog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_ &&\n      codePoint <= goog.i18n.uChar.LEAD_SURROGATE_MAX_VALUE_;\n};\n\n\n/**\n * Gets whether the given code point is a trailing surrogate character.\n * @param {number} codePoint\n * @return {boolean} Whether the given code point is a trailing surrogate\n * character.\n */\ngoog.i18n.uChar.isTrailSurrogateCodePoint = function(codePoint) {\n  return codePoint >= goog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_ &&\n      codePoint <= goog.i18n.uChar.TRAIL_SURROGATE_MAX_VALUE_;\n};\n\n\n/**\n * Composes a supplementary Unicode code point from the given UTF-16 surrogate\n * pair. If leadSurrogate isn't a leading surrogate code point or trailSurrogate\n * isn't a trailing surrogate code point, null is returned.\n * @param {number} lead The leading surrogate code point.\n * @param {number} trail The trailing surrogate code point.\n * @return {?number} The supplementary Unicode code point obtained by decoding\n * the given UTF-16 surrogate pair.\n */\ngoog.i18n.uChar.buildSupplementaryCodePoint = function(lead, trail) {\n  if (goog.i18n.uChar.isLeadSurrogateCodePoint(lead) &&\n      goog.i18n.uChar.isTrailSurrogateCodePoint(trail)) {\n    var shiftedLeadOffset =\n        (lead << goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_) -\n        (goog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_\n         << goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_);\n    var trailOffset = trail - goog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_ +\n        goog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_;\n    return shiftedLeadOffset + trailOffset;\n  }\n  return null;\n};\n","~:compiled-at",1560635001592,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.i18n.uchar.js\",\n\"lineCount\":119,\n\"mappings\":\"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\",\n\"sources\":[\"goog/i18n/uchar.js\"],\n\"sourcesContent\":[\"// Copyright 2009 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Collection of utility functions for Unicode character.\\n *\\n */\\n\\ngoog.provide('goog.i18n.uChar');\\n\\n\\n// Constants for handling Unicode supplementary characters (surrogate pairs).\\n\\n\\n/**\\n * The minimum value for Supplementary code points.\\n * @type {number}\\n * @private\\n */\\ngoog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_ = 0x10000;\\n\\n\\n/**\\n * The highest Unicode code point value (scalar value) according to the Unicode\\n * Standard.\\n * @type {number}\\n * @private\\n */\\ngoog.i18n.uChar.CODE_POINT_MAX_VALUE_ = 0x10FFFF;\\n\\n\\n/**\\n * Lead surrogate minimum value.\\n * @type {number}\\n * @private\\n */\\ngoog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_ = 0xD800;\\n\\n\\n/**\\n * Lead surrogate maximum value.\\n * @type {number}\\n * @private\\n */\\ngoog.i18n.uChar.LEAD_SURROGATE_MAX_VALUE_ = 0xDBFF;\\n\\n\\n/**\\n * Trail surrogate minimum value.\\n * @type {number}\\n * @private\\n */\\ngoog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_ = 0xDC00;\\n\\n\\n/**\\n * Trail surrogate maximum value.\\n * @type {number}\\n * @private\\n */\\ngoog.i18n.uChar.TRAIL_SURROGATE_MAX_VALUE_ = 0xDFFF;\\n\\n\\n/**\\n * The number of least significant bits of a supplementary code point that in\\n * UTF-16 become the least significant bits of the trail surrogate. The rest of\\n * the in-use bits of the supplementary code point become the least significant\\n * bits of the lead surrogate.\\n * @type {number}\\n * @private\\n */\\ngoog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_ = 10;\\n\\n\\n/**\\n * Gets the U+ notation string of a Unicode character. Ex: 'U+0041' for 'A'.\\n * @param {string} ch The given character.\\n * @return {string} The U+ notation of the given character.\\n */\\ngoog.i18n.uChar.toHexString = function(ch) {\\n  var chCode = goog.i18n.uChar.toCharCode(ch);\\n  var chCodeStr = 'U+' +\\n      goog.i18n.uChar.padString_(chCode.toString(16).toUpperCase(), 4, '0');\\n\\n  return chCodeStr;\\n};\\n\\n\\n/**\\n * Gets a string padded with given character to get given size.\\n * @param {string} str The given string to be padded.\\n * @param {number} length The target size of the string.\\n * @param {string} ch The character to be padded with.\\n * @return {string} The padded string.\\n * @private\\n */\\ngoog.i18n.uChar.padString_ = function(str, length, ch) {\\n  while (str.length < length) {\\n    str = ch + str;\\n  }\\n  return str;\\n};\\n\\n\\n/**\\n * Gets Unicode value of the given character.\\n * @param {string} ch The given character, which in the case of a supplementary\\n * character is actually a surrogate pair. The remainder of the string is\\n * ignored.\\n * @return {number} The Unicode value of the character.\\n */\\ngoog.i18n.uChar.toCharCode = function(ch) {\\n  return goog.i18n.uChar.getCodePointAround(ch, 0);\\n};\\n\\n\\n/**\\n * Gets a character from the given Unicode value. If the given code point is not\\n * a valid Unicode code point, null is returned.\\n * @param {number} code The Unicode value of the character.\\n * @return {?string} The character corresponding to the given Unicode value.\\n */\\ngoog.i18n.uChar.fromCharCode = function(code) {\\n  if (!goog.isDefAndNotNull(code) ||\\n      !(code >= 0 && code <= goog.i18n.uChar.CODE_POINT_MAX_VALUE_)) {\\n    return null;\\n  }\\n  if (goog.i18n.uChar.isSupplementaryCodePoint(code)) {\\n    // First, we split the code point into the trail surrogate part (the\\n    // TRAIL_SURROGATE_BIT_COUNT_ least significant bits) and the lead surrogate\\n    // part (the rest of the bits, shifted down; note that for now this includes\\n    // the supplementary offset, also shifted down, to be subtracted off below).\\n    var leadBits = code >> goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_;\\n    var trailBits = code &\\n        // A bit-mask to get the TRAIL_SURROGATE_BIT_COUNT_ (i.e. 10) least\\n        // significant bits. 1 << 10 = 0x0400. 0x0400 - 1 = 0x03FF.\\n        ((1 << goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_) - 1);\\n\\n    // Now we calculate the code point of each surrogate by adding each offset\\n    // to the corresponding base code point.\\n    var leadCodePoint = leadBits +\\n        (goog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_ -\\n         // Subtract off the supplementary offset, which had been shifted down\\n         // with the rest of leadBits. We do this here instead of before the\\n         // shift in order to save a separate subtraction step.\\n         (goog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_ >>\\n          goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_));\\n    var trailCodePoint = trailBits + goog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_;\\n\\n    // Convert the code points into a 2-character long string.\\n    return String.fromCharCode(leadCodePoint) +\\n        String.fromCharCode(trailCodePoint);\\n  }\\n  return String.fromCharCode(code);\\n};\\n\\n\\n/**\\n * Returns the Unicode code point at the specified index.\\n *\\n * If the char value specified at the given index is in the leading-surrogate\\n * range, and the following index is less than the length of `string`, and\\n * the char value at the following index is in the trailing-surrogate range,\\n * then the supplementary code point corresponding to this surrogate pair is\\n * returned.\\n *\\n * If the char value specified at the given index is in the trailing-surrogate\\n * range, and the preceding index is not before the start of `string`, and\\n * the char value at the preceding index is in the leading-surrogate range, then\\n * the negated supplementary code point corresponding to this surrogate pair is\\n * returned.\\n *\\n * The negation allows the caller to differentiate between the case where the\\n * given index is at the leading surrogate and the one where it is at the\\n * trailing surrogate, and thus deduce where the next character starts and\\n * preceding character ends.\\n *\\n * Otherwise, the char value at the given index is returned. Thus, a leading\\n * surrogate is returned when it is not followed by a trailing surrogate, and a\\n * trailing surrogate is returned when it is not preceded by a leading\\n * surrogate.\\n *\\n * @param {string} string The string.\\n * @param {number} index The index from which the code point is to be retrieved.\\n * @return {number} The code point at the given index. If the given index is\\n * that of the start (i.e. lead surrogate) of a surrogate pair, returns the code\\n * point encoded by the pair. If the given index is that of the end (i.e. trail\\n * surrogate) of a surrogate pair, returns the negated code pointed encoded by\\n * the pair.\\n */\\ngoog.i18n.uChar.getCodePointAround = function(string, index) {\\n  var charCode = string.charCodeAt(index);\\n  if (goog.i18n.uChar.isLeadSurrogateCodePoint(charCode) &&\\n      index + 1 < string.length) {\\n    var trail = string.charCodeAt(index + 1);\\n    if (goog.i18n.uChar.isTrailSurrogateCodePoint(trail)) {\\n      // Part of a surrogate pair.\\n      return /** @type {number} */ (\\n          goog.i18n.uChar.buildSupplementaryCodePoint(charCode, trail));\\n    }\\n  } else if (goog.i18n.uChar.isTrailSurrogateCodePoint(charCode) && index > 0) {\\n    var lead = string.charCodeAt(index - 1);\\n    if (goog.i18n.uChar.isLeadSurrogateCodePoint(lead)) {\\n      // Part of a surrogate pair.\\n      var codepoint = /** @type {number} */ (\\n          goog.i18n.uChar.buildSupplementaryCodePoint(lead, charCode));\\n      return -codepoint;\\n    }\\n  }\\n  return charCode;\\n};\\n\\n\\n/**\\n * Determines the length of the string needed to represent the specified\\n * Unicode code point.\\n * @param {number} codePoint\\n * @return {number} 2 if codePoint is a supplementary character, 1 otherwise.\\n */\\ngoog.i18n.uChar.charCount = function(codePoint) {\\n  return goog.i18n.uChar.isSupplementaryCodePoint(codePoint) ? 2 : 1;\\n};\\n\\n\\n/**\\n * Determines whether the specified Unicode code point is in the supplementary\\n * Unicode characters range.\\n * @param {number} codePoint\\n * @return {boolean} Whether then given code point is a supplementary character.\\n */\\ngoog.i18n.uChar.isSupplementaryCodePoint = function(codePoint) {\\n  return codePoint >= goog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_ &&\\n      codePoint <= goog.i18n.uChar.CODE_POINT_MAX_VALUE_;\\n};\\n\\n\\n/**\\n * Gets whether the given code point is a leading surrogate character.\\n * @param {number} codePoint\\n * @return {boolean} Whether the given code point is a leading surrogate\\n * character.\\n */\\ngoog.i18n.uChar.isLeadSurrogateCodePoint = function(codePoint) {\\n  return codePoint >= goog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_ &&\\n      codePoint <= goog.i18n.uChar.LEAD_SURROGATE_MAX_VALUE_;\\n};\\n\\n\\n/**\\n * Gets whether the given code point is a trailing surrogate character.\\n * @param {number} codePoint\\n * @return {boolean} Whether the given code point is a trailing surrogate\\n * character.\\n */\\ngoog.i18n.uChar.isTrailSurrogateCodePoint = function(codePoint) {\\n  return codePoint >= goog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_ &&\\n      codePoint <= goog.i18n.uChar.TRAIL_SURROGATE_MAX_VALUE_;\\n};\\n\\n\\n/**\\n * Composes a supplementary Unicode code point from the given UTF-16 surrogate\\n * pair. If leadSurrogate isn't a leading surrogate code point or trailSurrogate\\n * isn't a trailing surrogate code point, null is returned.\\n * @param {number} lead The leading surrogate code point.\\n * @param {number} trail The trailing surrogate code point.\\n * @return {?number} The supplementary Unicode code point obtained by decoding\\n * the given UTF-16 surrogate pair.\\n */\\ngoog.i18n.uChar.buildSupplementaryCodePoint = function(lead, trail) {\\n  if (goog.i18n.uChar.isLeadSurrogateCodePoint(lead) &&\\n      goog.i18n.uChar.isTrailSurrogateCodePoint(trail)) {\\n    var shiftedLeadOffset =\\n        (lead << goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_) -\\n        (goog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_\\n         << goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_);\\n    var trailOffset = trail - goog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_ +\\n        goog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_;\\n    return shiftedLeadOffset + trailOffset;\\n  }\\n  return null;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"i18n\",\"uChar\",\"SUPPLEMENTARY_CODE_POINT_MIN_VALUE_\",\"CODE_POINT_MAX_VALUE_\",\"LEAD_SURROGATE_MIN_VALUE_\",\"LEAD_SURROGATE_MAX_VALUE_\",\"TRAIL_SURROGATE_MIN_VALUE_\",\"TRAIL_SURROGATE_MAX_VALUE_\",\"TRAIL_SURROGATE_BIT_COUNT_\",\"toHexString\",\"goog.i18n.uChar.toHexString\",\"ch\",\"chCode\",\"toCharCode\",\"chCodeStr\",\"padString_\",\"toString\",\"toUpperCase\",\"goog.i18n.uChar.padString_\",\"str\",\"length\",\"goog.i18n.uChar.toCharCode\",\"getCodePointAround\",\"fromCharCode\",\"goog.i18n.uChar.fromCharCode\",\"code\",\"isDefAndNotNull\",\"isSupplementaryCodePoint\",\"leadBits\",\"trailBits\",\"leadCodePoint\",\"trailCodePoint\",\"String\",\"goog.i18n.uChar.getCodePointAround\",\"string\",\"index\",\"charCode\",\"charCodeAt\",\"isLeadSurrogateCodePoint\",\"trail\",\"isTrailSurrogateCodePoint\",\"buildSupplementaryCodePoint\",\"lead\",\"codepoint\",\"charCount\",\"goog.i18n.uChar.charCount\",\"codePoint\",\"goog.i18n.uChar.isSupplementaryCodePoint\",\"goog.i18n.uChar.isLeadSurrogateCodePoint\",\"goog.i18n.uChar.isTrailSurrogateCodePoint\",\"goog.i18n.uChar.buildSupplementaryCodePoint\",\"shiftedLeadOffset\",\"trailOffset\"]\n}\n"]