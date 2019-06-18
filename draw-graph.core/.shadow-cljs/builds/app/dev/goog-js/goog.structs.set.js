["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/structs/set.js"],"~:js","goog.provide(\"goog.structs.Set\");\ngoog.require(\"goog.structs\");\ngoog.require(\"goog.structs.Collection\");\ngoog.require(\"goog.structs.Map\");\n/**\n @final\n @constructor\n @implements {goog.structs.Collection<T>}\n @param {(Array<T>|Object<?,T>)=} opt_values\n @template T\n @deprecated This type is misleading: use ES6 Set instead.\n */\ngoog.structs.Set = function(opt_values) {\n  this.map_ = new goog.structs.Map;\n  if (opt_values) {\n    this.addAll(opt_values);\n  }\n};\n/** @private @const @type {function(?Object):number} */ goog.structs.Set.getUid_ = goog.getUid;\n/**\n @private\n @param {*} val\n @return {string}\n */\ngoog.structs.Set.getKey_ = function(val) {\n  var type = typeof val;\n  if (type == \"object\" && val || type == \"function\") {\n    return \"o\" + goog.structs.Set.getUid_(/** @type {Object} */ (val));\n  } else {\n    return type.substr(0, 1) + val;\n  }\n};\n/**\n @return {number}\n @override\n */\ngoog.structs.Set.prototype.getCount = function() {\n  return this.map_.getCount();\n};\n/**\n @param {T} element\n @override\n */\ngoog.structs.Set.prototype.add = function(element) {\n  this.map_.set(goog.structs.Set.getKey_(element), element);\n};\n/**\n @param {(Array<T>|goog.structs.Collection<T>|Object<?,T>)} col\n */\ngoog.structs.Set.prototype.addAll = function(col) {\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  for (var i = 0; i < l; i++) {\n    this.add(values[i]);\n  }\n};\n/**\n @param {(Array<T>|goog.structs.Collection<T>|Object<?,T>)} col\n */\ngoog.structs.Set.prototype.removeAll = function(col) {\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  for (var i = 0; i < l; i++) {\n    this.remove(values[i]);\n  }\n};\n/**\n @param {T} element\n @return {boolean}\n @override\n */\ngoog.structs.Set.prototype.remove = function(element) {\n  return this.map_.remove(goog.structs.Set.getKey_(element));\n};\ngoog.structs.Set.prototype.clear = function() {\n  this.map_.clear();\n};\n/**\n @return {boolean}\n */\ngoog.structs.Set.prototype.isEmpty = function() {\n  return this.map_.isEmpty();\n};\n/**\n @param {T} element\n @return {boolean}\n @override\n */\ngoog.structs.Set.prototype.contains = function(element) {\n  return this.map_.containsKey(goog.structs.Set.getKey_(element));\n};\n/**\n @param {(goog.structs.Collection<T>|Object)} col\n @return {boolean}\n */\ngoog.structs.Set.prototype.containsAll = function(col) {\n  return goog.structs.every(col, this.contains, this);\n};\n/**\n @param {(Array<S>|Object<?,S>)} col\n @return {!goog.structs.Set<(T|S)>}\n @template S\n */\ngoog.structs.Set.prototype.intersection = function(col) {\n  var result = new goog.structs.Set;\n  var values = goog.structs.getValues(col);\n  for (var i = 0; i < values.length; i++) {\n    var value = values[i];\n    if (this.contains(value)) {\n      result.add(value);\n    }\n  }\n  return result;\n};\n/**\n @param {(Array<T>|goog.structs.Collection<T>|Object<?,T>)} col\n @return {!goog.structs.Set}\n */\ngoog.structs.Set.prototype.difference = function(col) {\n  var result = this.clone();\n  result.removeAll(col);\n  return result;\n};\n/**\n @return {!Array<T>}\n */\ngoog.structs.Set.prototype.getValues = function() {\n  return this.map_.getValues();\n};\n/**\n @return {!goog.structs.Set<T>}\n */\ngoog.structs.Set.prototype.clone = function() {\n  return new goog.structs.Set(this);\n};\n/**\n @param {(goog.structs.Collection<T>|Object)} col\n @return {boolean}\n */\ngoog.structs.Set.prototype.equals = function(col) {\n  return this.getCount() == goog.structs.getCount(col) && this.isSubsetOf(col);\n};\n/**\n @param {(goog.structs.Collection<T>|Object)} col\n @return {boolean}\n */\ngoog.structs.Set.prototype.isSubsetOf = function(col) {\n  var colCount = goog.structs.getCount(col);\n  if (this.getCount() > colCount) {\n    return false;\n  }\n  if (!(col instanceof goog.structs.Set) && colCount > 5) {\n    col = new goog.structs.Set(col);\n  }\n  return goog.structs.every(this, function(value) {\n    return goog.structs.contains(col, value);\n  });\n};\n/**\n @param {boolean=} opt_keys\n @return {!goog.iter.Iterator}\n */\ngoog.structs.Set.prototype.__iterator__ = function(opt_keys) {\n  return this.map_.__iterator__(false);\n};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Datastructure: Set.\n *\n * @author arv@google.com (Erik Arvidsson)\n *\n * This class implements a set data structure. Adding and removing is O(1). It\n * supports both object and primitive values. Be careful because you can add\n * both 1 and new Number(1), because these are not the same. You can even add\n * multiple new Number(1) because these are not equal.\n */\n\n\ngoog.provide('goog.structs.Set');\n\ngoog.require('goog.structs');\ngoog.require('goog.structs.Collection');\ngoog.require('goog.structs.Map');\n\n/**\n * A set that can contain both primitives and objects.  Adding and removing\n * elements is O(1).  Primitives are treated as identical if they have the same\n * type and convert to the same string.  Objects are treated as identical only\n * if they are references to the same object.  WARNING: A goog.structs.Set can\n * contain both 1 and (new Number(1)), because they are not the same.  WARNING:\n * Adding (new Number(1)) twice will yield two distinct elements, because they\n * are two different objects.  WARNING: Any object that is added to a\n * goog.structs.Set will be modified!  Because goog.getUid() is used to\n * identify objects, every object in the set will be mutated.\n * @param {Array<T>|Object<?,T>=} opt_values Initial values to start with.\n * @constructor\n * @implements {goog.structs.Collection<T>}\n * @final\n * @template T\n * @deprecated This type is misleading: use ES6 Set instead.\n */\ngoog.structs.Set = function(opt_values) {\n  this.map_ = new goog.structs.Map;\n  if (opt_values) {\n    this.addAll(opt_values);\n  }\n};\n\n/**\n * A function that returns a unique id.\n * @private @const {function(?Object): number}\n */\ngoog.structs.Set.getUid_ = goog.getUid;\n\n\n/**\n * Obtains a unique key for an element of the set.  Primitives will yield the\n * same key if they have the same type and convert to the same string.  Object\n * references will yield the same key only if they refer to the same object.\n * @param {*} val Object or primitive value to get a key for.\n * @return {string} A unique key for this value/object.\n * @private\n */\ngoog.structs.Set.getKey_ = function(val) {\n  var type = typeof val;\n  if (type == 'object' && val || type == 'function') {\n    return 'o' + goog.structs.Set.getUid_(/** @type {Object} */ (val));\n  } else {\n    return type.substr(0, 1) + val;\n  }\n};\n\n\n/**\n * @return {number} The number of elements in the set.\n * @override\n */\ngoog.structs.Set.prototype.getCount = function() {\n  return this.map_.getCount();\n};\n\n\n/**\n * Add a primitive or an object to the set.\n * @param {T} element The primitive or object to add.\n * @override\n */\ngoog.structs.Set.prototype.add = function(element) {\n  this.map_.set(goog.structs.Set.getKey_(element), element);\n};\n\n\n/**\n * Adds all the values in the given collection to this set.\n * @param {Array<T>|goog.structs.Collection<T>|Object<?,T>} col A collection\n *     containing the elements to add.\n */\ngoog.structs.Set.prototype.addAll = function(col) {\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  for (var i = 0; i < l; i++) {\n    this.add(values[i]);\n  }\n};\n\n\n/**\n * Removes all values in the given collection from this set.\n * @param {Array<T>|goog.structs.Collection<T>|Object<?,T>} col A collection\n *     containing the elements to remove.\n */\ngoog.structs.Set.prototype.removeAll = function(col) {\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  for (var i = 0; i < l; i++) {\n    this.remove(values[i]);\n  }\n};\n\n\n/**\n * Removes the given element from this set.\n * @param {T} element The primitive or object to remove.\n * @return {boolean} Whether the element was found and removed.\n * @override\n */\ngoog.structs.Set.prototype.remove = function(element) {\n  return this.map_.remove(goog.structs.Set.getKey_(element));\n};\n\n\n/**\n * Removes all elements from this set.\n */\ngoog.structs.Set.prototype.clear = function() {\n  this.map_.clear();\n};\n\n\n/**\n * Tests whether this set is empty.\n * @return {boolean} True if there are no elements in this set.\n */\ngoog.structs.Set.prototype.isEmpty = function() {\n  return this.map_.isEmpty();\n};\n\n\n/**\n * Tests whether this set contains the given element.\n * @param {T} element The primitive or object to test for.\n * @return {boolean} True if this set contains the given element.\n * @override\n */\ngoog.structs.Set.prototype.contains = function(element) {\n  return this.map_.containsKey(goog.structs.Set.getKey_(element));\n};\n\n\n/**\n * Tests whether this set contains all the values in a given collection.\n * Repeated elements in the collection are ignored, e.g.  (new\n * goog.structs.Set([1, 2])).containsAll([1, 1]) is True.\n * @param {goog.structs.Collection<T>|Object} col A collection-like object.\n * @return {boolean} True if the set contains all elements.\n */\ngoog.structs.Set.prototype.containsAll = function(col) {\n  return goog.structs.every(col, this.contains, this);\n};\n\n\n/**\n * Finds all values that are present in both this set and the given collection.\n * @param {Array<S>|Object<?,S>} col A collection.\n * @return {!goog.structs.Set<T|S>} A new set containing all the values\n *     (primitives or objects) present in both this set and the given\n *     collection.\n * @template S\n */\ngoog.structs.Set.prototype.intersection = function(col) {\n  var result = new goog.structs.Set();\n\n  var values = goog.structs.getValues(col);\n  for (var i = 0; i < values.length; i++) {\n    var value = values[i];\n    if (this.contains(value)) {\n      result.add(value);\n    }\n  }\n\n  return result;\n};\n\n\n/**\n * Finds all values that are present in this set and not in the given\n * collection.\n * @param {Array<T>|goog.structs.Collection<T>|Object<?,T>} col A collection.\n * @return {!goog.structs.Set} A new set containing all the values\n *     (primitives or objects) present in this set but not in the given\n *     collection.\n */\ngoog.structs.Set.prototype.difference = function(col) {\n  var result = this.clone();\n  result.removeAll(col);\n  return result;\n};\n\n\n/**\n * Returns an array containing all the elements in this set.\n * @return {!Array<T>} An array containing all the elements in this set.\n */\ngoog.structs.Set.prototype.getValues = function() {\n  return this.map_.getValues();\n};\n\n\n/**\n * Creates a shallow clone of this set.\n * @return {!goog.structs.Set<T>} A new set containing all the same elements as\n *     this set.\n */\ngoog.structs.Set.prototype.clone = function() {\n  return new goog.structs.Set(this);\n};\n\n\n/**\n * Tests whether the given collection consists of the same elements as this set,\n * regardless of order, without repetition.  Primitives are treated as equal if\n * they have the same type and convert to the same string; objects are treated\n * as equal if they are references to the same object.  This operation is O(n).\n * @param {goog.structs.Collection<T>|Object} col A collection.\n * @return {boolean} True if the given collection consists of the same elements\n *     as this set, regardless of order, without repetition.\n */\ngoog.structs.Set.prototype.equals = function(col) {\n  return this.getCount() == goog.structs.getCount(col) && this.isSubsetOf(col);\n};\n\n\n/**\n * Tests whether the given collection contains all the elements in this set.\n * Primitives are treated as equal if they have the same type and convert to the\n * same string; objects are treated as equal if they are references to the same\n * object.  This operation is O(n).\n * @param {goog.structs.Collection<T>|Object} col A collection.\n * @return {boolean} True if this set is a subset of the given collection.\n */\ngoog.structs.Set.prototype.isSubsetOf = function(col) {\n  var colCount = goog.structs.getCount(col);\n  if (this.getCount() > colCount) {\n    return false;\n  }\n  // TODO(user) Find the minimal collection size where the conversion makes\n  // the contains() method faster.\n  if (!(col instanceof goog.structs.Set) && colCount > 5) {\n    // Convert to a goog.structs.Set so that goog.structs.contains runs in\n    // O(1) time instead of O(n) time.\n    col = new goog.structs.Set(col);\n  }\n  return goog.structs.every(\n      this, function(value) { return goog.structs.contains(col, value); });\n};\n\n\n/**\n * Returns an iterator that iterates over the elements in this set.\n * @param {boolean=} opt_keys This argument is ignored.\n * @return {!goog.iter.Iterator} An iterator over the elements in this set.\n */\ngoog.structs.Set.prototype.__iterator__ = function(opt_keys) {\n  return this.map_.__iterator__(false);\n};\n","~:compiled-at",1560635001584,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.structs.set.js\",\n\"lineCount\":166,\n\"mappings\":\"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\",\n\"sources\":[\"goog/structs/set.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Datastructure: Set.\\n *\\n * @author arv@google.com (Erik Arvidsson)\\n *\\n * This class implements a set data structure. Adding and removing is O(1). It\\n * supports both object and primitive values. Be careful because you can add\\n * both 1 and new Number(1), because these are not the same. You can even add\\n * multiple new Number(1) because these are not equal.\\n */\\n\\n\\ngoog.provide('goog.structs.Set');\\n\\ngoog.require('goog.structs');\\ngoog.require('goog.structs.Collection');\\ngoog.require('goog.structs.Map');\\n\\n/**\\n * A set that can contain both primitives and objects.  Adding and removing\\n * elements is O(1).  Primitives are treated as identical if they have the same\\n * type and convert to the same string.  Objects are treated as identical only\\n * if they are references to the same object.  WARNING: A goog.structs.Set can\\n * contain both 1 and (new Number(1)), because they are not the same.  WARNING:\\n * Adding (new Number(1)) twice will yield two distinct elements, because they\\n * are two different objects.  WARNING: Any object that is added to a\\n * goog.structs.Set will be modified!  Because goog.getUid() is used to\\n * identify objects, every object in the set will be mutated.\\n * @param {Array<T>|Object<?,T>=} opt_values Initial values to start with.\\n * @constructor\\n * @implements {goog.structs.Collection<T>}\\n * @final\\n * @template T\\n * @deprecated This type is misleading: use ES6 Set instead.\\n */\\ngoog.structs.Set = function(opt_values) {\\n  this.map_ = new goog.structs.Map;\\n  if (opt_values) {\\n    this.addAll(opt_values);\\n  }\\n};\\n\\n/**\\n * A function that returns a unique id.\\n * @private @const {function(?Object): number}\\n */\\ngoog.structs.Set.getUid_ = goog.getUid;\\n\\n\\n/**\\n * Obtains a unique key for an element of the set.  Primitives will yield the\\n * same key if they have the same type and convert to the same string.  Object\\n * references will yield the same key only if they refer to the same object.\\n * @param {*} val Object or primitive value to get a key for.\\n * @return {string} A unique key for this value/object.\\n * @private\\n */\\ngoog.structs.Set.getKey_ = function(val) {\\n  var type = typeof val;\\n  if (type == 'object' && val || type == 'function') {\\n    return 'o' + goog.structs.Set.getUid_(/** @type {Object} */ (val));\\n  } else {\\n    return type.substr(0, 1) + val;\\n  }\\n};\\n\\n\\n/**\\n * @return {number} The number of elements in the set.\\n * @override\\n */\\ngoog.structs.Set.prototype.getCount = function() {\\n  return this.map_.getCount();\\n};\\n\\n\\n/**\\n * Add a primitive or an object to the set.\\n * @param {T} element The primitive or object to add.\\n * @override\\n */\\ngoog.structs.Set.prototype.add = function(element) {\\n  this.map_.set(goog.structs.Set.getKey_(element), element);\\n};\\n\\n\\n/**\\n * Adds all the values in the given collection to this set.\\n * @param {Array<T>|goog.structs.Collection<T>|Object<?,T>} col A collection\\n *     containing the elements to add.\\n */\\ngoog.structs.Set.prototype.addAll = function(col) {\\n  var values = goog.structs.getValues(col);\\n  var l = values.length;\\n  for (var i = 0; i < l; i++) {\\n    this.add(values[i]);\\n  }\\n};\\n\\n\\n/**\\n * Removes all values in the given collection from this set.\\n * @param {Array<T>|goog.structs.Collection<T>|Object<?,T>} col A collection\\n *     containing the elements to remove.\\n */\\ngoog.structs.Set.prototype.removeAll = function(col) {\\n  var values = goog.structs.getValues(col);\\n  var l = values.length;\\n  for (var i = 0; i < l; i++) {\\n    this.remove(values[i]);\\n  }\\n};\\n\\n\\n/**\\n * Removes the given element from this set.\\n * @param {T} element The primitive or object to remove.\\n * @return {boolean} Whether the element was found and removed.\\n * @override\\n */\\ngoog.structs.Set.prototype.remove = function(element) {\\n  return this.map_.remove(goog.structs.Set.getKey_(element));\\n};\\n\\n\\n/**\\n * Removes all elements from this set.\\n */\\ngoog.structs.Set.prototype.clear = function() {\\n  this.map_.clear();\\n};\\n\\n\\n/**\\n * Tests whether this set is empty.\\n * @return {boolean} True if there are no elements in this set.\\n */\\ngoog.structs.Set.prototype.isEmpty = function() {\\n  return this.map_.isEmpty();\\n};\\n\\n\\n/**\\n * Tests whether this set contains the given element.\\n * @param {T} element The primitive or object to test for.\\n * @return {boolean} True if this set contains the given element.\\n * @override\\n */\\ngoog.structs.Set.prototype.contains = function(element) {\\n  return this.map_.containsKey(goog.structs.Set.getKey_(element));\\n};\\n\\n\\n/**\\n * Tests whether this set contains all the values in a given collection.\\n * Repeated elements in the collection are ignored, e.g.  (new\\n * goog.structs.Set([1, 2])).containsAll([1, 1]) is True.\\n * @param {goog.structs.Collection<T>|Object} col A collection-like object.\\n * @return {boolean} True if the set contains all elements.\\n */\\ngoog.structs.Set.prototype.containsAll = function(col) {\\n  return goog.structs.every(col, this.contains, this);\\n};\\n\\n\\n/**\\n * Finds all values that are present in both this set and the given collection.\\n * @param {Array<S>|Object<?,S>} col A collection.\\n * @return {!goog.structs.Set<T|S>} A new set containing all the values\\n *     (primitives or objects) present in both this set and the given\\n *     collection.\\n * @template S\\n */\\ngoog.structs.Set.prototype.intersection = function(col) {\\n  var result = new goog.structs.Set();\\n\\n  var values = goog.structs.getValues(col);\\n  for (var i = 0; i < values.length; i++) {\\n    var value = values[i];\\n    if (this.contains(value)) {\\n      result.add(value);\\n    }\\n  }\\n\\n  return result;\\n};\\n\\n\\n/**\\n * Finds all values that are present in this set and not in the given\\n * collection.\\n * @param {Array<T>|goog.structs.Collection<T>|Object<?,T>} col A collection.\\n * @return {!goog.structs.Set} A new set containing all the values\\n *     (primitives or objects) present in this set but not in the given\\n *     collection.\\n */\\ngoog.structs.Set.prototype.difference = function(col) {\\n  var result = this.clone();\\n  result.removeAll(col);\\n  return result;\\n};\\n\\n\\n/**\\n * Returns an array containing all the elements in this set.\\n * @return {!Array<T>} An array containing all the elements in this set.\\n */\\ngoog.structs.Set.prototype.getValues = function() {\\n  return this.map_.getValues();\\n};\\n\\n\\n/**\\n * Creates a shallow clone of this set.\\n * @return {!goog.structs.Set<T>} A new set containing all the same elements as\\n *     this set.\\n */\\ngoog.structs.Set.prototype.clone = function() {\\n  return new goog.structs.Set(this);\\n};\\n\\n\\n/**\\n * Tests whether the given collection consists of the same elements as this set,\\n * regardless of order, without repetition.  Primitives are treated as equal if\\n * they have the same type and convert to the same string; objects are treated\\n * as equal if they are references to the same object.  This operation is O(n).\\n * @param {goog.structs.Collection<T>|Object} col A collection.\\n * @return {boolean} True if the given collection consists of the same elements\\n *     as this set, regardless of order, without repetition.\\n */\\ngoog.structs.Set.prototype.equals = function(col) {\\n  return this.getCount() == goog.structs.getCount(col) && this.isSubsetOf(col);\\n};\\n\\n\\n/**\\n * Tests whether the given collection contains all the elements in this set.\\n * Primitives are treated as equal if they have the same type and convert to the\\n * same string; objects are treated as equal if they are references to the same\\n * object.  This operation is O(n).\\n * @param {goog.structs.Collection<T>|Object} col A collection.\\n * @return {boolean} True if this set is a subset of the given collection.\\n */\\ngoog.structs.Set.prototype.isSubsetOf = function(col) {\\n  var colCount = goog.structs.getCount(col);\\n  if (this.getCount() > colCount) {\\n    return false;\\n  }\\n  // TODO(user) Find the minimal collection size where the conversion makes\\n  // the contains() method faster.\\n  if (!(col instanceof goog.structs.Set) && colCount > 5) {\\n    // Convert to a goog.structs.Set so that goog.structs.contains runs in\\n    // O(1) time instead of O(n) time.\\n    col = new goog.structs.Set(col);\\n  }\\n  return goog.structs.every(\\n      this, function(value) { return goog.structs.contains(col, value); });\\n};\\n\\n\\n/**\\n * Returns an iterator that iterates over the elements in this set.\\n * @param {boolean=} opt_keys This argument is ignored.\\n * @return {!goog.iter.Iterator} An iterator over the elements in this set.\\n */\\ngoog.structs.Set.prototype.__iterator__ = function(opt_keys) {\\n  return this.map_.__iterator__(false);\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"structs\",\"Set\",\"goog.structs.Set\",\"opt_values\",\"map_\",\"Map\",\"addAll\",\"getUid_\",\"getUid\",\"getKey_\",\"goog.structs.Set.getKey_\",\"val\",\"type\",\"substr\",\"prototype\",\"getCount\",\"goog.structs.Set.prototype.getCount\",\"add\",\"goog.structs.Set.prototype.add\",\"element\",\"set\",\"goog.structs.Set.prototype.addAll\",\"col\",\"values\",\"getValues\",\"l\",\"length\",\"i\",\"removeAll\",\"goog.structs.Set.prototype.removeAll\",\"remove\",\"goog.structs.Set.prototype.remove\",\"clear\",\"goog.structs.Set.prototype.clear\",\"isEmpty\",\"goog.structs.Set.prototype.isEmpty\",\"contains\",\"goog.structs.Set.prototype.contains\",\"containsKey\",\"containsAll\",\"goog.structs.Set.prototype.containsAll\",\"every\",\"intersection\",\"goog.structs.Set.prototype.intersection\",\"result\",\"value\",\"difference\",\"goog.structs.Set.prototype.difference\",\"clone\",\"goog.structs.Set.prototype.getValues\",\"goog.structs.Set.prototype.clone\",\"equals\",\"goog.structs.Set.prototype.equals\",\"isSubsetOf\",\"goog.structs.Set.prototype.isSubsetOf\",\"colCount\",\"__iterator__\",\"goog.structs.Set.prototype.__iterator__\",\"opt_keys\"]\n}\n"]