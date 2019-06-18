["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/structs/priorityqueue.js"],"~:js","goog.provide(\"goog.structs.PriorityQueue\");\ngoog.require(\"goog.structs.Heap\");\n/**\n @final\n @constructor\n @extends {goog.structs.Heap<number,VALUE>}\n @template VALUE\n */\ngoog.structs.PriorityQueue = function() {\n  goog.structs.Heap.call(this);\n};\ngoog.inherits(goog.structs.PriorityQueue, goog.structs.Heap);\n/**\n @param {number} priority\n @param {VALUE} value\n */\ngoog.structs.PriorityQueue.prototype.enqueue = function(priority, value) {\n  this.insert(priority, value);\n};\n/**\n @return {VALUE}\n */\ngoog.structs.PriorityQueue.prototype.dequeue = function() {\n  return this.remove();\n};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Datastructure: Priority Queue.\n *\n *\n * This file provides the implementation of a Priority Queue. Smaller priorities\n * move to the front of the queue. If two values have the same priority,\n * it is arbitrary which value will come to the front of the queue first.\n */\n\n// TODO(user): Should this rely on natural ordering via some Comparable\n//     interface?\n\n\ngoog.provide('goog.structs.PriorityQueue');\n\ngoog.require('goog.structs.Heap');\n\n\n\n/**\n * Class for Priority Queue datastructure.\n *\n * @constructor\n * @extends {goog.structs.Heap<number, VALUE>}\n * @template VALUE\n * @final\n */\ngoog.structs.PriorityQueue = function() {\n  goog.structs.Heap.call(this);\n};\ngoog.inherits(goog.structs.PriorityQueue, goog.structs.Heap);\n\n\n/**\n * Puts the specified value in the queue.\n * @param {number} priority The priority of the value. A smaller value here\n *     means a higher priority.\n * @param {VALUE} value The value.\n */\ngoog.structs.PriorityQueue.prototype.enqueue = function(priority, value) {\n  this.insert(priority, value);\n};\n\n\n/**\n * Retrieves and removes the head of this queue.\n * @return {VALUE} The element at the head of this queue. Returns undefined if\n *     the queue is empty.\n */\ngoog.structs.PriorityQueue.prototype.dequeue = function() {\n  return this.remove();\n};\n","~:compiled-at",1560635001587,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.structs.priorityqueue.js\",\n\"lineCount\":26,\n\"mappings\":\"AA2BAA,IAAAC,QAAA,CAAa,4BAAb,CAAA;AAEAD,IAAAE,QAAA,CAAa,mBAAb,CAAA;AAYA;;;;;;AAAAF,IAAAG,QAAAC,cAAA,GAA6BC,QAAQ,EAAG;AACtCL,MAAAG,QAAAG,KAAAC,KAAA,CAAuB,IAAvB,CAAA;AADsC,CAAxC;AAGAP,IAAAQ,SAAA,CAAcR,IAAAG,QAAAC,cAAd,EAA0CJ,IAAAG,QAAAG,KAA1C,CAAA;AASA;;;;AAAAN,IAAAG,QAAAC,cAAAK,UAAAC,QAAA,GAA+CC,QAAQ,CAACC,QAAD,EAAWC,KAAX,CAAkB;AACvE,MAAAC,OAAA,CAAYF,QAAZ,EAAsBC,KAAtB,CAAA;AADuE,CAAzE;AAUA;;;AAAAb,IAAAG,QAAAC,cAAAK,UAAAM,QAAA,GAA+CC,QAAQ,EAAG;AACxD,SAAO,IAAAC,OAAA,EAAP;AADwD,CAA1D;;\",\n\"sources\":[\"goog/structs/priorityqueue.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Datastructure: Priority Queue.\\n *\\n *\\n * This file provides the implementation of a Priority Queue. Smaller priorities\\n * move to the front of the queue. If two values have the same priority,\\n * it is arbitrary which value will come to the front of the queue first.\\n */\\n\\n// TODO(user): Should this rely on natural ordering via some Comparable\\n//     interface?\\n\\n\\ngoog.provide('goog.structs.PriorityQueue');\\n\\ngoog.require('goog.structs.Heap');\\n\\n\\n\\n/**\\n * Class for Priority Queue datastructure.\\n *\\n * @constructor\\n * @extends {goog.structs.Heap<number, VALUE>}\\n * @template VALUE\\n * @final\\n */\\ngoog.structs.PriorityQueue = function() {\\n  goog.structs.Heap.call(this);\\n};\\ngoog.inherits(goog.structs.PriorityQueue, goog.structs.Heap);\\n\\n\\n/**\\n * Puts the specified value in the queue.\\n * @param {number} priority The priority of the value. A smaller value here\\n *     means a higher priority.\\n * @param {VALUE} value The value.\\n */\\ngoog.structs.PriorityQueue.prototype.enqueue = function(priority, value) {\\n  this.insert(priority, value);\\n};\\n\\n\\n/**\\n * Retrieves and removes the head of this queue.\\n * @return {VALUE} The element at the head of this queue. Returns undefined if\\n *     the queue is empty.\\n */\\ngoog.structs.PriorityQueue.prototype.dequeue = function() {\\n  return this.remove();\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"structs\",\"PriorityQueue\",\"goog.structs.PriorityQueue\",\"Heap\",\"call\",\"inherits\",\"prototype\",\"enqueue\",\"goog.structs.PriorityQueue.prototype.enqueue\",\"priority\",\"value\",\"insert\",\"dequeue\",\"goog.structs.PriorityQueue.prototype.dequeue\",\"remove\"]\n}\n"]