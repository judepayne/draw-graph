(ns draw-graph.examples)


(def default-options
  {:label ""
   :show-roots? false
   :shape "ellipse"
   :layout "dot"
   :cluster-on ""
   :color-on ""
   :rankdir "LR"
   :fixedsize "true"
   :elide "0"
   :splines "splines"
   :overlap "false"
   :concentrate "false"
   :post-process? false
   :pp-clusters {:y true :h true :x true :w true}
   :pp-anneal-bias "3"
   :pp-font ""
   :pp-cluster-sep ""
   :num-cluster-edges "4"
   :tooltip ""
   :constraint "true"
   :show-constraints? false
   :url ""
   :fix-ranks? false})


;; ------------------
;; example 1: friendship graph

(defn ^:export example1 []
  {:data
"h,animal:name
e,pandas:simone,pandas:max
e,pandas:shahar,pandas:summer
e,pandas:nikkai,pandas:isobel
e,pandas:malakai,pandas:delila
e,pandas:cristolene,pandas:shahar,relationship:friend|color:deeppink
e,pandas:kacey,pandas:shahar|shape:rect:fillcolor:blue:fontcolor:white,relationship:friend
e,pandas:malakai,pandas:ivy
e,pandas:max,pandas:Bridget,|color:blue
e,pandas:ivy,squirrels:huxley,|color:red
e,pandas:kacey,brownbears:cosmo,|color:deeppink
e,brownbears:cosmo|shape:septagon:style:filled,brownbears:eliza,|color:deeppink
e,pandas:simone,pandas:ivy,|color:green2
e,pandas:simone,pandas:summer,|color:green2
cs,pandas|bgcolor:cornsilk1:style:rounded
cs,brownbears|bgcolor:palegreen:color:limegreen:margin:20
cs,squirrels|bgcolor:pink:style:rounded:margin:15"
   :options
   (merge default-options
          {:layout "dot"
           :cluster-on "animal"
           :label "name"
           :shape "ellipse"
           :splines "line"
           :overlap "false"
           :rankdir "TB"})})


(defn ^:export example1b []
  {:data
"h,animal:name
n,node123,pandas:shar\\nhar|shape:rect:fillcolor:blue:fontcolor:white
n,node456,pandas:max
n,node909,pandas:kacey
e,pandas:simone,node456
e,node123,pandas:summer
e,pandas:nikkai,pandas:isobel
e,pandas:malakai,pandas:delila
e,pandas:cristolene,node123|penwidth:2,relationship:friend|color:deeppink
e,node909,node123,relationship:friend
e,pandas:malakai,pandas:ivy
e,node456,pandas:Bridget,|color:blue
e,pandas:ivy,squirrels:huxley,|color:red
e,node909,brownbears:cosmo,|color:deeppink
e,brownbears:cosmo|shape:septagon:style:filled,brownbears:eliza,|color:deeppink
e,pandas:simone,pandas:ivy,|color:green2
e,pandas:simone,pandas:summer,|color:green2
cs,pandas|bgcolor:cornsilk1:style:rounded
cs,brownbears|bgcolor:palegreen:color:limegreen:margin:20
cs,squirrels|bgcolor:pink:style:rounded:margin:15"
   :options
   (merge default-options
          {:layout "dot"
           :cluster-on "animal"
           :label "name"
           :shape "ellipse"
           :splines "line"
           :overlap "false"
           :rankdir "TB"})})


(defn ^:export example1c []
  {:data
"{\n\t\"header\": [\"animal\", \"name\"],\n\t\"synonyms\": {\n\t\t\"node123\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"shar\\\\nhar\"\n\t\t},\n\t\t\"node456\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"max\"\n\t\t},\n\t\t\"node909\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"kacey\"\n\t\t}\n\t},\n\t\"nodes\": [{\n\t\t\"node\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"shar\\\\nhar\"\n\t\t},\n\t\t\"style\": {\n\t\t\t\"shape\": \"rect\",\n\t\t\t\"fillcolor\": \"blue\",\n\t\t\t\"fontcolor\": \"white\"\n\t\t}\n\t}, {\n\t\t\"node\": \"node123\",\n\t\t\"style\": {\n\t\t\t\"penwidth\": \"2\"\n\t\t}\n\t}, {\n\t\t\"node\": {\n\t\t\t\"animal\": \"brownbears\",\n\t\t\t\"name\": \"cosmo\"\n\t\t},\n\t\t\"style\": {\n\t\t\t\"shape\": \"septagon\",\n\t\t\t\"style\": \"filled\"\n\t\t}\n\t}],\n\t\"edges\": [{\n\t\t\"src\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"simone\"\n\t\t},\n\t\t\"dst\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"summer\"\n\t\t},\n\t\t\"style\": {\n\t\t\t\"color\": \"green2\"\n\t\t}\n\t}, {\n\t\t\"src\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"simone\"\n\t\t},\n\t\t\"dst\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"ivy\"\n\t\t},\n\t\t\"style\": {\n\t\t\t\"color\": \"green2\"\n\t\t}\n\t}, {\n\t\t\"src\": {\n\t\t\t\"animal\": \"brownbears\",\n\t\t\t\"name\": \"cosmo\"\n\t\t},\n\t\t\"dst\": {\n\t\t\t\"animal\": \"brownbears\",\n\t\t\t\"name\": \"eliza\"\n\t\t},\n\t\t\"style\": {\n\t\t\t\"color\": \"deeppink\"\n\t\t}\n\t}, {\n\t\t\"src\": \"node909\",\n\t\t\"dst\": {\n\t\t\t\"animal\": \"brownbears\",\n\t\t\t\"name\": \"cosmo\"\n\t\t},\n\t\t\"style\": {\n\t\t\t\"color\": \"deeppink\"\n\t\t}\n\t}, {\n\t\t\"src\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"ivy\"\n\t\t},\n\t\t\"dst\": {\n\t\t\t\"animal\": \"squirrels\",\n\t\t\t\"name\": \"huxley\"\n\t\t},\n\t\t\"style\": {\n\t\t\t\"color\": \"red\"\n\t\t}\n\t}, {\n\t\t\"src\": \"node456\",\n\t\t\"dst\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"Bridget\"\n\t\t},\n\t\t\"style\": {\n\t\t\t\"color\": \"blue\"\n\t\t}\n\t}, {\n\t\t\"src\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"malakai\"\n\t\t},\n\t\t\"dst\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"ivy\"\n\t\t}\n\t}, {\n\t\t\"src\": \"node909\",\n\t\t\"dst\": \"node123\",\n\t\t\"meta\": {\n\t\t\t\"relationship\": \"friend\"\n\t\t}\n\t}, {\n\t\t\"src\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"cristolene\"\n\t\t},\n\t\t\"dst\": \"node123\",\n\t\t\"meta\": {\n\t\t\t\"relationship\": \"friend\"\n\t\t},\n\t\t\"style\": {\n\t\t\t\"color\": \"deeppink\"\n\t\t}\n\t}, {\n\t\t\"src\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"malakai\"\n\t\t},\n\t\t\"dst\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"delila\"\n\t\t}\n\t}, {\n\t\t\"src\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"nikkai\"\n\t\t},\n\t\t\"dst\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"isobel\"\n\t\t}\n\t}, {\n\t\t\"src\": \"node123\",\n\t\t\"dst\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"summer\"\n\t\t}\n\t}, {\n\t\t\"src\": {\n\t\t\t\"animal\": \"pandas\",\n\t\t\t\"name\": \"simone\"\n\t\t},\n\t\t\"dst\": \"node456\"\n\t}],\n\t\"cluster-styles\": {\n\t\t\"pandas\": {\n\t\t\t\"bgcolor\": \"cornsilk1\",\n\t\t\t\"style\": \"rounded\"\n\t\t},\n\t\t\"brownbears\": {\n\t\t\t\"bgcolor\": \"palegreen\",\n\t\t\t\"color\": \"limegreen\",\n\t\t\t\"margin\": \"20\"\n\t\t},\n\t\t\"squirrels\": {\n\t\t\t\"bgcolor\": \"pink\",\n\t\t\t\"style\": \"rounded\",\n\t\t\t\"margin\": \"15\"\n\t\t}\n\t}\n}"
   :options
   (merge default-options
          {:layout "dot"
           :cluster-on "animal"
           :label "name"
           :shape "ellipse"
           :splines "line"
           :overlap "false"
           :rankdir "TB"})})


;; ------------------
;; example 2&3: two trees

(defn ^:export example2 []
  {:data
"h,tree:id
e,Client:a1,Client:b1
e,Client:a1,Client:b2
e,Client:a1,Client:b3
e,Client:a1,Client:b4
e,Client:a1,Client:b5
e,Client:a1,Client:b6
e,Client:a1,Client:b7
e,Client:a1,Client:b8
e,Client:b1,Client:c1
e,Client:b1,Client:c2
e,Client:b2,Client:c3
e,Client:b2,Client:c4
e,Client:b3,Client:c5
e,Client:b3,Client:c6
e,Client:b4,Client:c7
e,Client:b4,Client:c8
e,Client:b5,Client:c9
e,Client:b5,Client:c10
e,Client:b6,Client:c11
e,Client:b6,Client:c12
e,Client:b7,Client:c13
e,Client:b7,Client:c14
e,Client:b8,Client:c15
e,Client:b8,Client:c16
e,Server:b1,Server:a1,|dir:back
e,Server:b2,Server:a1,|dir:back
e,Server:b3,Server:a1,|dir:back
e,Server:b4,Server:a1,|dir:back
e,Server:b5,Server:a1,|dir:back
e,Server:b6,Server:a1,|dir:back
e,Server:b7,Server:a1,|dir:back
e,Server:b8,Server:a1,|dir:back
e,Server:b9,Server:a1,|dir:back
e,Server:b10,Server:a1,|dir:back
e,Server:c1,Server:b1,|dir:back
e,Server:c2,Server:b1,|dir:back
e,Server:c3,Server:b1,|dir:back
e,Server:c4,Server:b2,|dir:back
e,Server:c5,Server:b2,|dir:back
e,Server:c6,Server:b2,|dir:back
e,Server:c7,Server:b3,|dir:back
e,Server:c8,Server:b3,|dir:back
e,Server:c9,Server:b3,|dir:back
e,Server:c10,Server:b4,|dir:back
e,Server:c11,Server:b4,|dir:back
e,Server:c12,Server:b4,|dir:back
e,Server:c13,Server:b5,|dir:back
e,Server:c14,Server:b5,|dir:back
e,Server:c15,Server:b5,|dir:back
e,Server:c16,Server:b6,|dir:back
e,Server:c17,Server:b6,|dir:back
e,Server:c18,Server:b6,|dir:back
e,Server:c19,Server:b7,|dir:back
e,Server:c20,Server:b7,|dir:back
e,Server:c21,Server:b7,|dir:back
e,Server:c22,Server:b8,|dir:back
e,Server:c23,Server:b8,|dir:back
e,Server:c24,Server:b8,|dir:back
e,Server:c25,Server:b9,|dir:back
e,Server:c26,Server:b9,|dir:back
e,Server:c27,Server:b9,|dir:back
e,Server:c28,Server:b10,|dir:back
e,Server:c29,Server:b10,|dir:back
e,Server:c30,Server:b10,|dir:back
e,Client:c8,Server:c1,|minlen:10:style:dotted
e,Client:c4,Server:c16,|minlen:10:style:dotted
e,Client:c8,Server:c29,|minlen:10:style:dotted
e,Client:c13,Server:c24,|minlen:10:style:dotted
e,Client:c1,Server:c10,|minlen:10:style:dotted
e,Client:c7,Server:c14,|minlen:10:style:dotted
e,Client:c9,Server:c23,|minlen:10:style:dotted
e,Client:c11,Server:c16,|minlen:10:style:dotted
e,Client:c6,Server:c18,|minlen:10:style:dotted
e,Client:c10,Server:c22,|minlen:10:style:dotted
e,Client:c1,Server:c15,|minlen:10:style:dotted
e,Client:c8,Server:c26,|minlen:10:style:dotted
e,Client:c9,Server:c18,|minlen:10:style:dotted
e,Client:c5,Server:c12,|minlen:10:style:dotted
e,Client:c7,Server:c10,|minlen:10:style:dotted
e,Client:c16,Server:c23,|minlen:10:style:dotted
e,Client:c12,Server:c1,|minlen:10:style:dotted
e,Client:c16,Server:c3,|minlen:10:style:dotted
e,Client:c15,Server:c3,|minlen:10:style:dotted
e,Client:c11,Server:c3,|minlen:10:style:dotted"
   :options
   (merge default-options
          {:layout "dot"
           :cluster-on "tree"
           :label "id"
           :shape "folder"
           :splines "ortho"
           :ranksep 0.5
           :overlap "false"})})

(def ex2 (example2))


(defn ^:export example3 []
  {:data 
"h,tree:id
e,Client:a1,Client:b1
e,Client:a1,Client:b2
e,Client:a1,Client:b3
e,Client:a1,Client:b4
e,Client:a1,Client:b5
e,Client:a1,Client:b6
e,Client:a1,Client:b7
e,Client:a1,Client:b8
e,Client:b1,Client:c1
e,Client:b1,Client:c2
e,Client:b2,Client:c3
e,Client:b2,Client:c4
e,Client:b3,Client:c5
e,Client:b3,Client:c6
e,Client:b4,Client:c7
e,Client:b4,Client:c8
e,Client:b5,Client:c9
e,Client:b5,Client:c10
e,Client:b6,Client:c11
e,Client:b6,Client:c12
e,Client:b7,Client:c13
e,Client:b7,Client:c14
e,Client:b8,Client:c15
e,Client:b8,Client:c16
e,Server:a1,Server:b1
e,Server:a1,Server:b2
e,Server:a1,Server:b3
e,Server:a1,Server:b4
e,Server:a1,Server:b5
e,Server:a1,Server:b6
e,Server:a1,Server:b7
e,Server:a1,Server:b8
e,Server:a1,Server:b9
e,Server:a1,Server:b10
e,Server:b1,Server:c1
e,Server:b1,Server:c2
e,Server:b1,Server:c3
e,Server:b1,Server:c4
e,Server:b2,Server:c5
e,Server:b2,Server:c6
e,Server:b3,Server:c7
e,Server:b3,Server:c8
e,Server:b3,Server:c9
e,Server:b4,Server:c10
e,Server:b4,Server:c11
e,Server:b4,Server:c12
e,Server:b5,Server:c13
e,Server:b5,Server:c14
e,Server:b5,Server:c15
e,Server:b6,Server:c16
e,Server:b6,Server:c17
e,Server:b6,Server:c18
e,Server:b7,Server:c19
e,Server:b7,Server:c20
e,Server:b7,Server:c21
e,Server:b8,Server:c22
e,Server:b8,Server:c23
e,Server:b8,Server:c24
e,Server:b9,Server:c25
e,Server:b9,Server:c26
e,Server:b9,Server:c27
e,Server:b10,Server:c28
e,Server:b10,Server:c29
e,Server:b10,Server:c30
e,Client:c8,Server:c1
e,Client:c4,Server:c16
e,Client:c8,Server:c29
e,Client:c13,Server:c24
e,Client:c1,Server:c10
e,Client:c7,Server:c14
e,Client:c9,Server:c23
e,Client:c11,Server:c16
e,Client:c6,Server:c18
e,Client:c10,Server:c22
e,Client:c1,Server:c15
e,Client:c8,Server:c26
e,Client:c9,Server:c18
e,Client:c5,Server:c12
e,Client:c7,Server:c10
e,Client:c16,Server:c23
e,Client:c12,Server:c1
e,Client:c16,Server:c3
e,Client:c15,Server:c3
e,Client:c11,Server:c3"
   :options
   (merge default-options
          {:layout "dot"
           :cluster-on "tree"
           :label "id"
           :shape "folder"
           :splines "line"
           :overlap "false"})})

(def ex3 (example3))

;; ------------------
;; example 4 : stanford emails

(defn ^:export example4 []
  {:data 
"h,id
e,0,1
e,2,3
e,2,4
e,5,6
e,5,7
e,8,9
e,10,11
e,12,13
e,12,14
e,15,16
e,17,18
e,12,19
e,20,21
e,20,22
e,23,24
e,23,25
e,23,26
e,23,27
e,23,28
e,23,29
e,23,30
e,23,31
e,23,32
e,23,33
e,23,34
e,23,35
e,23,36
e,23,37
e,23,38
e,23,39
e,23,40
e,41,42
e,43,44
e,45,46
e,47,48
e,49,50
e,41,51
e,52,53
e,54,55
e,54,56
e,54,57
e,54,58
e,54,59
e,60,61
e,54,54
e,62,63
e,64,65
e,62,4
e,66,67
e,68,69
e,42,41
e,70,71
e,72,21
e,71,70
e,73,74
e,75,76
e,75,48
e,77,78
e,77,79
e,80,81
e,80,68
e,19,62
e,82,83
e,22,21
e,82,84
e,21,72
e,41,85
e,41,86
e,41,87
e,82,86
e,88,89
e,90,91
e,92,20
e,41,93
e,41,94
e,41,95
e,89,96
e,89,88
e,97,98
e,97,99
e,97,100
e,97,101
e,97,102
e,103,104
e,51,41
e,82,105
e,90,106
e,62,107
e,108,109
e,108,66
e,108,110
e,108,111
e,108,112
e,113,114
e,115,116
e,117,118
e,76,119
e,17,120
e,82,121
e,122,123
e,14,12
e,124,125
e,13,126
e,127,128
e,127,129
e,127,130
e,131,132
e,40,26
e,40,29
e,18,133
e,56,55
e,56,54
e,56,59
e,134,6
e,115,62
e,135,136
e,137,138
e,137,137
e,22,20
e,139,140
e,141,142
e,143,143
e,143,51
e,143,133
e,144,145
e,146,147
e,83,82
e,148,149
e,150,103
e,150,150
e,49,84
e,151,28
e,152,153
e,153,152
e,154,155
e,156,157
e,139,15
e,158,159
e,4,2
e,4,3
e,133,18
e,160,161
e,84,162
e,84,50
e,84,49
e,84,71
e,72,163
e,164,139
e,165,166
e,167,168
e,123,122
e,169,115
e,169,170
e,40,171
e,123,103
e,123,172
e,123,61
e,123,123
e,24,96
e,81,80
e,173,21
e,174,175
e,176,177
e,176,178
e,122,179
e,21,22
e,180,130
e,181,182
e,129,183
e,184,184
e,181,179
e,185,52
e,70,186
e,106,187
e,137,175
e,137,174
e,188,189
e,108,190
e,191,157
e,191,191
e,192,193
e,192,194
e,192,195
e,192,2
e,192,192
e,41,196
e,41,197
e,41,198
e,41,199
e,41,200
e,41,167
e,41,201
e,41,202
e,41,203
e,41,204
e,41,205
e,41,206
e,41,207
e,208,208
e,61,123
e,209,210
e,41,128
e,211,54
e,115,212
e,106,189
e,137,208
e,212,115
e,56,58
e,30,25
e,30,36
e,30,41
e,155,213
e,48,47
e,214,180
e,96,24
e,4,4
e,4,62
e,155,215
e,216,15
e,170,170
e,71,217
e,71,50
e,71,49
e,13,13
e,98,97
e,74,1
e,74,218
e,74,219
e,74,215
e,74,220
e,74,221
e,74,222
e,74,223
e,74,18
e,74,224
e,74,225
e,74,226
e,74,227
e,74,17
e,74,228
e,229,64
e,100,97
e,230,21
e,230,20
e,231,232
e,233,209
e,233,234
e,233,235
e,233,236
e,233,159
e,233,237
e,233,210
e,233,238
e,233,239
e,233,240
e,233,241
e,233,242
e,233,243
e,233,244
e,245,115
e,246,247
e,248,74
e,13,238
e,106,62
e,106,249
e,13,27
e,13,209
e,103,250
e,40,251
e,175,252
e,169,251
e,115,169
e,232,231
e,75,253
e,75,40
e,175,174
e,254,137
e,249,212
e,249,255
e,249,256
e,222,74
e,183,257
e,17,218
e,183,198
e,183,258
e,183,183
e,19,12
e,259,72
e,259,260
e,75,261
e,115,170
e,251,169
e,262,262
e,263,263
e,264,265
e,264,266
e,264,267
e,106,268
e,269,45
e,129,270
e,271,272
e,81,256
e,46,139
e,46,15
e,46,273
e,46,272
e,46,274
e,46,164
e,46,216
e,46,45
e,275,276
e,277,277
e,155,114
e,158,62
e,129,278
e,101,101
e,29,40
e,279,107
e,155,208
e,231,280
e,281,281
e,282,283
e,155,284
e,46,46
e,160,28
e,160,23
e,285,286
e,285,211
e,258,183
e,69,287
e,280,231
e,212,249
e,162,288
e,162,71
e,162,84
e,280,289
e,280,270
e,280,196
e,280,168
e,280,167
e,280,290
e,280,203
e,280,14
e,280,291
e,280,284
e,280,129
e,280,130
e,280,292
e,293,19
e,254,226
e,129,294
e,189,106
e,295,296
e,165,115
e,287,69
e,287,80
e,74,248
e,74,297
e,74,73
e,298,299
e,281,137"
   :options
   (merge default-options
          {:layout "dot"
           :label "id"
           :shape "box"
           :cluster-on ""
           :splines "spline"
           :overlap "false"})})

(def ex4 (example4))

;; ------------------
;; circular tree

(defn ^:export example5 []
  {:data
"h,tree:layer:id
e,circ:a:1,circ:b:1
e,circ:a:1,circ:b:2
e,circ:a:1,circ:b:3
e,circ:a:1,circ:b:4
e,circ:a:1,circ:b:5
e,circ:b:1,circ:c:1
e,circ:b:1,circ:c:2
e,circ:b:1,circ:c:3
e,circ:b:2,circ:c:4
e,circ:b:2,circ:c:5
e,circ:b:2,circ:c:6
e,circ:b:3,circ:c:7
e,circ:b:3,circ:c:8
e,circ:b:3,circ:c:9
e,circ:b:4,circ:c:10
e,circ:b:4,circ:c:11
e,circ:b:4,circ:c:12
e,circ:b:5,circ:c:13
e,circ:b:5,circ:c:14
e,circ:b:5,circ:c:15
e,circ:c:1,circ:d:1
e,circ:c:1,circ:d:2
e,circ:c:1,circ:d:3
e,circ:c:1,circ:d:4
e,circ:c:1,circ:d:5
e,circ:c:2,circ:d:6
e,circ:c:2,circ:d:7
e,circ:c:2,circ:d:8
e,circ:c:2,circ:d:9
e,circ:c:2,circ:d:10
e,circ:c:3,circ:d:11
e,circ:c:3,circ:d:12
e,circ:c:3,circ:d:13
e,circ:c:3,circ:d:14
e,circ:c:3,circ:d:15
e,circ:c:4,circ:d:16
e,circ:c:4,circ:d:17
e,circ:c:4,circ:d:18
e,circ:c:4,circ:d:19
e,circ:c:4,circ:d:20
e,circ:c:5,circ:d:21
e,circ:c:5,circ:d:22
e,circ:c:5,circ:d:23
e,circ:c:5,circ:d:24
e,circ:c:5,circ:d:25
e,circ:c:6,circ:d:26
e,circ:c:6,circ:d:27
e,circ:c:6,circ:d:28
e,circ:c:6,circ:d:29
e,circ:c:6,circ:d:30
e,circ:c:7,circ:d:31
e,circ:c:7,circ:d:32
e,circ:c:7,circ:d:33
e,circ:c:7,circ:d:34
e,circ:c:7,circ:d:35
e,circ:c:8,circ:d:36
e,circ:c:8,circ:d:37
e,circ:c:8,circ:d:38
e,circ:c:8,circ:d:39
e,circ:c:8,circ:d:40
e,circ:c:9,circ:d:41
e,circ:c:9,circ:d:42
e,circ:c:9,circ:d:43
e,circ:c:9,circ:d:44
e,circ:c:9,circ:d:45
e,circ:c:10,circ:d:46
e,circ:c:10,circ:d:47
e,circ:c:10,circ:d:48
e,circ:c:10,circ:d:49
e,circ:c:10,circ:d:50
e,circ:c:11,circ:d:51
e,circ:c:11,circ:d:52
e,circ:c:11,circ:d:53
e,circ:c:11,circ:d:54
e,circ:c:11,circ:d:55
e,circ:c:12,circ:d:56
e,circ:c:12,circ:d:57
e,circ:c:12,circ:d:58
e,circ:c:12,circ:d:59
e,circ:c:12,circ:d:60
e,circ:c:13,circ:d:61
e,circ:c:13,circ:d:62
e,circ:c:13,circ:d:63
e,circ:c:13,circ:d:64
e,circ:c:13,circ:d:65
e,circ:c:14,circ:d:66
e,circ:c:14,circ:d:67
e,circ:c:14,circ:d:68
e,circ:c:14,circ:d:69
e,circ:c:14,circ:d:70
e,circ:c:15,circ:d:71
e,circ:c:15,circ:d:72
e,circ:c:15,circ:d:73
e,circ:c:15,circ:d:74
e,circ:c:15,circ:d:75"
   :options
   (merge default-options
          {:layout "neato"
           :label "layer"
           :color-on "id"
           :shape "circle"
           :splines "curved"
           :overlap "ipsep"
           :ranksep "1.7"
           :scale "1.3"})})

(def ex5 (example5))

;; -----------------
;; Friendship nested clusters

(defn ^:export example6 []
  {:data
"h,animal:name:link
e,pandas:simone:https://www.mpaa.org/the-credits/,pandas:max:
e,pandas:sharhar:,pandas:summer:
e,pandas:nikkai:|fillcolor:gold4:shape:triangle,pandas:isobel:
e,pandas:malakai:,pandas:delila:
e,pandas:cristo-\\nlene:,pandas:sharhar:
e,pandas:kacey:,pandas:sharhar:|shape:rect:fillcolor:blue:fontcolor:white
e,pandas:malakai:,pandas:ivy:
e,pandas:max:,pandas:Bridget:|fillcolor:aquamarine:fontcolor:black,|color:blue
e,pandas:ivy:,squirrels:huxley:,|color:red
e,pandas:kacey:,brownbears:cosmo:,|color:deeppink
e,brownbears:cosmo:|shape:septagon:style:filled,brownbears:eliza:,|color:deeppink
e,pandas:simone:https://www.mpaa.org/the-credits/,pandas:ivy:,|color:green2
e,pandas:simone:https://www.mpaa.org/the-credits/,pandas:summer:,|color:green2
e,wolves:leo:,wolves:sebas-\\ntian:
e,wolves:leo:,wolves:angel-\\nique:
e,pandas:summer:,wolves:leo:
e,flora:daisy:|fillcolor:gold:shape:box,flora:rose:,|splines:none:arrowhead:obox
e,flora:rose:|fillcolor:gold:shape:box,flora:lily:,|style:invis
e,flora:lily:|fillcolor:gold:shape:box,flora:jasmine:,|splines:none:arrowhead:invodot:arrowsize:1.3
e,flora:jasmine:|fillcolor:gold:shape:box,flora:fleur:,|style:invis
e,flora:fleur:|fillcolor:gold:shape:box,flora:alyssa:|fillcolor:gold:shape:box,|fillcolor:palegoldenrod:style:dashed:color:goldenrod2
e,flora:fleur:,flora:aster:|fillcolor:gold:shape:star,|fillcolor:gray:style:dotted
e,wolves:angel-\\nique:,flora:lily:,|taillabel:<<table cellpadding='1' border='1' cellborder='0' bgcolor='#c731ed' color='magenta' style='rounded'><tr><td><font point-size='9'>1.</font></td></tr></table>>:headlabel:<<table cellpadding='1' border='1' cellborder='0' bgcolor='#c731ed' color='magenta' style='rounded'><tr><td><font point-size='9'>1.</font></td></tr></table>>:labeldistance:0.5:labelangle:0:color:#c731ed00:style:dotted:constraint:false
cs,pandas|bgcolor:cornsilk1:fontcolor:black
cs,brownbears|bgcolor:palegreen:color:limegreen:margin:20
cs,squirrels|bgcolor:pink:margin:15:style:rounded
cs,bears|bgcolor:bisque3:margin:15:style:rounded:fontcolor:chocolate4
cs,carnivores|bgcolor:ivory3:margin:15:style:rounded:fontcolor:maroon1
cs,animals|bgcolor:lightskyblue1
cs,rodents|bgcolor:indianred2
cs,wolves|bgcolor:gray64:style:rounded:fontcolor:white
cs,flora|bgcolor:palegreen:style:rounded:fontcolor:seagreen
cs,plantae|bgcolor:palegreen2:style:rounded
cp,pandas:bears:brownbears:bears:bears:carnivores:carnivores:animals
cp,squirrels:rodents:wolves:carnivores:rodents:animals:flora:plantae
ce,animals:rodents:pandas:wolves"
   :options
   (merge default-options
          {:layout "dot"
           :label "name"
           :shape "ellipse"
           :splines "ortho"
           :cluster-on "animal"
           :rankdir "TB"
           })})

(def ex6 (example6))


(defn ^:export example7 []
  {:data
"h,animal:name
e,pandas:simone,pandas:max
e,pandas:sharhar,pandas:summer
e,pandas:nikkai|fillcolor:gold4:shape:triangle,pandas:isobel
e,pandas:malakai,pandas:delila
e,pandas:cristo-\\nlene,pandas:sharhar
e,pandas:kacey,pandas:sharhar|shape:rect:fillcolor:blue:fontcolor:white
e,pandas:malakai,pandas:ivy
e,pandas:max,pandas:Bridget|fillcolor:aquamarine:fontcolor:black,|color:blue
e,pandas:ivy,squirrels:huxley,|color:red
e,pandas:kacey,brownbears:cosmo,|color:deeppink
e,brownbears:cosmo|shape:septagon:style:filled,brownbears:eliza,|color:deeppink
e,pandas:simone,pandas:ivy,|color:green2
e,pandas:simone,pandas:summer,|color:green2
e,wolves:leo,wolves:sebas-\\ntian
e,wolves:leo,wolves:angel-\\nique
e,wolves:leo,carnivores:polaris
e,carnivores:polaris,carnivores:penguiny
e,brownbears:eliza,carnivores:polaris
e,pandas:summer,wolves:leo
e,flora:daisy|fillcolor:gold:shape:box,flora:rose,|splines:none:arrowhead:obox
e,flora:rose|fillcolor:gold:shape:box,flora:lily,|style:invis
e,flora:lily|fillcolor:gold:shape:box,flora:jasmine,|splines:none:arrowhead:invodot:arrowsize:1.3
e,flora:jasmine|fillcolor:gold:shape:box,flora:fleur,|style:invis
e,flora:fleur|fillcolor:gold:shape:box,flora:alyssa|fillcolor:gold:shape:box,|fillcolor:palegoldenrod:style:dashed:color:goldenrod2
e,flora:fleur,flora:aster|fillcolor:gold:shape:star,|fillcolor:gray:style:dotted
e,wolves:angel-\\nique,flora:lily,|taillabel:<<table cellpadding='1' border='1' cellborder='0' bgcolor='#c731ed' color='magenta' style='rounded'><tr><td><font point-size='9'>1.</font></td></tr></table>>:headlabel:<<table cellpadding='1' border='1' cellborder='0' bgcolor='#c731ed' color='magenta' style='rounded'><tr><td><font point-size='9'>1.</font></td></tr></table>>:labeldistance:0.5:labelangle:0:color:#c731ed00:style:dotted:constraint:false
cs,pandas|bgcolor:cornsilk1:fontcolor:black
cs,brownbears|bgcolor:palegreen:color:limegreen:margin:20
cs,squirrels|bgcolor:pink:margin:15:style:rounded
cs,bears|bgcolor:bisque3:margin:15:style:rounded:fontcolor:chocolate4
cs,carnivores|bgcolor:ivory3:margin:15:style:rounded:fontcolor:maroon1
cs,animals|bgcolor:lightskyblue1
cs,rodents|bgcolor:indianred2
cs,wolves|bgcolor:gray64:style:rounded:fontcolor:white
cs,flora|bgcolor:palegreen:style:rounded:fontcolor:seagreen
cs,plantae|bgcolor:palegreen2:style:rounded
cp,pandas:bears:brownbears:bears:bears:carnivores:carnivores:animals
cp,squirrels:rodents:wolves:carnivores:rodents:animals:flora:plantae
ce,carnivores:rodents
ce,pandas:wolves"
   :options
   (merge default-options
          {:layout "dot"
           :label "name"
           :shape "ellipse"
           :splines "ortho"
           :cluster-on "animal"
           :rankdir "TB"
           :tooltip "name/animal"
           })})

(def ex7 (example7))


(defn ^:export example8 []
  {:data
"h,view:function:application:id
e,Current State:Golden Sources:Books:PTN-1234|fillcolor:#EEBD1B,Current State:Golden Sources:Books:PTN-1234|fillcolor:#EEBD1B,|style:invis
e,Current State:Golden Sources:Products:PTN-6538|fillcolor:#EEBD1B,Current State:Golden Sources:Instrument\\nHub|fillcolor:#E8EEF7,|style:invis
e,Current State:Golden Sources:Instrument:PTN-2345|fillcolor:#EEBD1B,Current State:Golden Sources:P-RAM|fillcolor:#E8EEF7,|style:invis
e,Current State:Golden Sources:Employee:PTN-23|fillcolor:#EEBD1B,Current State:Golden Sources:Affinity|fillcolor:#E8EEF7,|style:invis
e,Current State:Golden Sources:Clients:PTN-675664|fillcolor:#EEBD1B,Current State:Golden Sources:ERP|fillcolor:#E8EEF7,|style:invis
e,Current State:Capture:HCB|fillcolor:#E8EEF7,Current State:Settlement:hePikes|fillcolor:#E8EEF7,|style:dotted
e,Current State:Capture:sysTicket|fillcolor:#E8EEF7,Current State:Reporting:TradeDepo|fillcolor:#E8EEF7,|style:dotted:constraint:true
e,Current State:Capture:sysTicket|fillcolor:#E8EEF7,Current State:Lifecycle:CONFIRMATIONS\\nWriter\\nDoc|fillcolor:#c6ddf2:shape:box,|style:dotted
e,Current State:Capture:FORPS-bus|fillcolor:#c6ddf2:shape:box,Current State:Capture:FORPS-bus|fillcolor:#c6ddf2:shape:box,|style:invis
e,Current State:Lifecycle:BAD Image|fillcolor:#E8EEF7,Current State:Risk:Guerilla Risk|fillcolor:#E8EEF7,|color:#267a17:taillabel:25k/day:fontcolor:red:fontsize:10:labeltooltip:BAD Image->Guerilla Risk
e,Current State:Lifecycle:CONFIRMATIONS\\nWriter\\nDoc|fillcolor:#E8EEF7,Current State:Reporting:i-Assert(CZH)|fillcolor:#E8EEF7,|color:#dd809e
e,Current State:Lifecycle:Fidelity Plus|fillcolor:#c6ddf2:shape:box,Current State:Reporting:i-Assert(CZH)|fillcolor:#E8EEF7,|color:#dd809e:label:10k/day:URL:http://www.google.com:labeltooltip:Fidelity->i-Assert(CZH):edgetooltip:Fidelity->i-Assert(CZH):fontcolor:blue:headlabel:10k/day:taillabel:10k/day:fontsize:10
e,Current State:Lifecycle:Fidelity Plus|fillcolor:#c6ddf2:shape:box,Current State:Reporting:1-Charge|fillcolor:#E8EEF7,|color:#dd809e:URL:http://www.google.com:target:_graphviz:penwidth:2:tooltip:click me. tooltip and url demo
e,Current State:Risk:Guerilla Risk|fillcolor:#E8EEF7,Current State:Risk:GRIMACE|fillcolor:#E8EEF7,|color:#267a17:constraint:false
cp,Golden Sources:Current State
cp,Capture:Current State
cp,Lifecycle:Current State
cp,Reporting:Current State
cp,Settlement:Current State
cp,Risk:Current State
ce,Golden Sources:Capture
ce,Golden Sources:Lifecycle
ce,Capture:Risk
ce,Lifecycle:Risk
ce,Risk:Settlement
ce,Settlement:Reporting
cs,Current State|bgcolor:#fdfdff:color:#49c1e5:margin:8:labeljust:r"
   :options
   (merge default-options
          {:layout "dot"
           :label "application"
           :shape "cylinder"
           :splines "ortho"
           :cluster-on "function"
           :rankdir "TB"
           :post-process? true
           :pp-clusters {:y true :h true :x true :w true}
           :pp-anneal-bias "3"
           :pp-font "sans-serif"
           :pp-cluster-sep "0"
           :tooltip "application&id"
           :constraint "true"
           :fixedsize "false"
           :ranksep 0
           :nodesep 0.3
           })})

(def ex8 (example8))


(defn ^:export example9 []
  {:data
"h,view:function:application:id:level:link:owner\ne,Current State:Golden Sources:Books:PTN-1234:1:https://en.wikipedia.org/wiki/Reference_data:Jacob|fillcolor:#EEBD1B:shape:cylinder,Current State:Golden Sources:Books:PTN-1234:1:https://en.wikipedia.org/wiki/Reference_data:Jacob|fillcolor:#EEBD1B:shape:cylinder:area:10,type:books:format:legacy|style:invis:fontsize:10\ne,Current State:Golden Sources:Products:PTN-6538:1:https://en.wikipedia.org/wiki/Reference_data:Jacob|fillcolor:#EEBD1B:shape:cylinder:area:11,Current State:Golden Sources:InstHub:PTN-:1:https://en.wikipedia.org/wiki/Reference_data:Jacob|fillcolor:#E8EEF7:area:5,type:products:format:legacy|style:invis:fontsize:10:constraint:true\ne,Current State:Golden Sources:Instrument:PTN-2345:1:https://en.wikipedia.org/wiki/Reference_data:Jacob|fillcolor:#EEBD1B:shape:cylinder:area:20:fontsize:14,Current State:Golden Sources:P-RAM:PTN-:1:https://en.wikipedia.org/wiki/Reference_data:Jacob|fillcolor:#E8EEF7:area:8,type:instruments:format:strategic|style:invis:fontsize:10:constraint:true\ne,Current State:Golden Sources:Employee:PTN-23:1:https://en.wikipedia.org/wiki/Reference_data:Jacob|fillcolor:#EEBD1B:shape:cylinder:area:7,Current State:Golden Sources:Affinity:PTN-:1:https://en.wikipedia.org/wiki/Reference_data:Jacob|fillcolor:#E8EEF7:area:9,type:employees:format:legacy|style:invis:fontsize:10:constraint:true\ne,Current State:Golden Sources:Clients:PTN-675664:1:https://en.wikipedia.org/wiki/Reference_data:Jacob|fillcolor:#EEBD1B:shape:cylinder:area:22:fontsize:14,Current State:Golden Sources:ERP:PTN-:1:https://en.wikipedia.org/wiki/Reference_data:Jacob|fillcolor:#E8EEF7:area:8,type:clients:format:strategic|style:invis:fontsize:10:constraint:true\ne,Current State:Capture:HCB:PTN-:1::Ruth|fillcolor:#E8EEF7,Current State:Settlement:hePikes:PTN-:1::John|fillcolor:#E8EEF7,type:trades:volume:102:format:legacy|style:dotted:fontsize:10\ne,Current State:Capture:HCB:PTN-:1::Ruth|fillcolor:#E8EEF7,Current State:Settlement:ECN:PTN-:1::John|fillcolor:#E8EEF7,type:trades:volume:105:format:legacy|style:dotted:fontsize:10\ne,Current State:Capture:War:PTN-:1::Ruth|fillcolor:#c6ddf2:shape:box,Current State:Settlement:ADH:PTN-:1::John|fillcolor:#E8EEF7,type:trades:volume:34:format:strategic|color:#a6a8e0:fontsize:10\ne,Current State:Capture:War:PTN-:1::Ruth|fillcolor:#c6ddf2:shape:box,Current State:Reporting:noShock:PTN-:1::Paul|fillcolor:#E8EEF7,type:trades:volume:37:format:strategic|color:#a6a8e0:fontsize:10\ne,Current State:Capture:HCB:PTN-:1::Ruth|fillcolor:#c6ddf2:shape:box:area:6,Current State:Lifecycle:BAD Image:PTN-:1::Ruth|fillcolor:#E8EEF7,type:trades:volume:45:format:strategic|color:#a6a8e0:fontsize:10\ne,Current State:Capture:War:PTN-:1::Ruth|fillcolor:#c6ddf2:shape:box:area:8,Current State:Lifecycle:BAD Image:PTN-:1::Ruth,type:trades:volume:101:format:strategic|color:#a6a8e0:fontsize:10\ne,Current State:Capture:sysTicket:PTN-:1::Ruth|fillcolor:#E8EEF7,Current State:Lifecycle:Fidelity Plus:PTN-:1::Ruth|fillcolor:#E8EEF7:area:10,type:trades:volume:190:format:legacy|color:#a6a8e0:fontsize:10\ne,Current State:Capture:sysTicket:PTN-:1::Ruth|fillcolor:#E8EEF7,Current State:Reporting:TradeDepo:PTN-:1::Paul|fillcolor:#E8EEF7,type:trades:volume:245:format:legacy|color:#a6a8e0:fontsize:10\ne,Current State:Capture:sysTicket:PTN-:1::Ruth|fillcolor:#E8EEF7:area:2,Current State:Lifecycle:CONFIRMATIONS\\nWriter\\nDoc:PTN-:1::Ruth|fillcolor:#c6ddf2:shape:box,type:trades:volume:370:format:strategic|style:dotted:fontsize:10\ne,Current State:Capture:FORPS-bus:PTN-:1::Ruth|fillcolor:#c6ddf2:shape:box,Current State:Capture:FORPS-bus:PTN-:1::Ruth|fillcolor:#c6ddf2:shape:box,type:trades:volume:12:format:strategic|style:invis:fontsize:10\ne,Current State:Capture:FORPS-bus:PTN-:1::Ruth|fillcolor:#c6ddf2:shape:box:area:4,Current State:Lifecycle:BAD Image:PTN-:1::Ruth|fillcolor:#E8EEF7,type:trades:volume:202:format:strategic|style:invis:fontsize:10\ne,Current State:Lifecycle:BAD Image:PTN-:1::Ruth|fillcolor:#E8EEF7,Current State:Risk:Guerilla Risk:PTN-:1::Simone|fillcolor:#E8EEF7,type:positions:volume:34:format:strategic|color:#267a17:fontcolor:red:fontsize:10:labeltooltip:BAD Image->Guerilla Risk\ne,Current State:Lifecycle:BAD Image:PTN-:1::Ruth|fillcolor:#E8EEF7,Current State:Reporting:1-Charge:PTN-:1::Paul|fillcolor:#E8EEF7:area:3,type:positions:volume:114:format:legacy|color:#267a17:fontcolor:red:fontsize:10:labeltooltip:BAD Image->1-Charge\ne,Current State:Lifecycle:BAD Image:PTN-:1::Ruth|fillcolor:#E8EEF7,Current State:Payments:eFermi:PTN-:1::Loris|fillcolor:#E8EEF7,type:positions:volume:114:format:legacy|color:#81648c:fontsize:10\ne,Current State:Lifecycle:BAD Image:PTN-:1::Ruth|fillcolor:#E8EEF7,Current State:Payments:Kuiper:PTN-:1::Loris|fillcolor:#E8EEF7:area:36:fontsize:14,type:positions:volume:8:format:legacy|color:#81648c:fontsize:10\ne,Current State:Lifecycle:BAD Image:PTN-:1::Ruth|fillcolor:#E8EEF7:area:6,Current State:Settlement:hePikes:PTN-:1::John|fillcolor:#E8EEF7,type:positions:volume:45:format:strategic|color:#81648c:fontsize:10\ne,Current State:Lifecycle:CONFIRMATIONS\\nWriter\\nDoc:PTN-:1::Ruth|fillcolor:#E8EEF7:area:10,Current State:Reporting:i-Assert(CZH):PTN-:1::Paul|fillcolor:#E8EEF7:area:3,type:confirms:volume:40:format:legacy|color:#dd809e:fontsize:10\ne,Current State:Lifecycle:Fidelity Plus:PTN-:1::Ruth|fillcolor:#E8EEF7,Current State:Reporting:i-Assert(CZH):PTN-:1::Paul|fillcolor:#E8EEF7:area:6,type:trades:volume:10:format:legacy|color:#dd809e:URL:http://www.google.com:labeltooltip:Fidelity->i-Assert(CZH):edgetooltip:Fidelity->i-Assert(CZH):fontcolor:blue:fontsize:10:penwidth:2:target:_blank\ne,Current State:Risk:Guerilla Risk:PTN-:1::Simone|fillcolor:#E8EEF7,Current State:Risk:GRIMACE:PTN-:1::Simone|fillcolor:#E8EEF7,type:pl-risk:volume:45:format:strategic|color:#267a17:fontsize:10:constraint:true\ne,Current State:Risk:Guerilla Risk:PTN-:1::Simone|fillcolor:#E8EEF7,Current State:Reporting:TradeDepo:PTN-:1::Paul|fillcolor:#E8EEF7:area:18:fontsize:12,type:pl-risk:volume:60:format:strategic|color:#296640:fontsize:10:constraint:true\ne,Current State:Risk:GRIMACE:PTN-:1::Simone|fillcolor:#E8EEF7,Current State:Finance:SIP-local:PTN-:1::Daniel|fillcolor:#E8EEF7,type:pl-risk:volume:60:format:strategic|color:#296640:fontsize:10\ne,Current State:Risk:GRIMACE:PTN-:1::Simone|fillcolor:#E8EEF7,Current State:Settlement:hePikes:PTN-:1::John|fillcolor:#E8EEF7,type:cash:volume:82:format:strategic|color:#296640:fontsize:10\ne,Current State:Settlement:hePikes:PTN-:1::John|fillcolor:#E8EEF7,Current State:Settlement:ECN:PTN-:1::John|fillcolor:#E8EEF7,type:instructions:volume:90:format:legacy|color:#9e5919:fontsize:10\ne,Current State:Settlement:hePikes:PTN-:1::John|fillcolor:#E8EEF7,Current State:Payments:eFermi:PTN-:1::Loris|fillcolor:#E8EEF7,type:instructions:volume:5:format:legacy|color:#81648c:fontsize:10\ne,Current State:Settlement:hePikes:PTN-:1::John|fillcolor:#E8EEF7:area:14,Current State:Finance:SIP-local:PTN-:1::Daniel|fillcolor:#E8EEF7,type:trades:volume:147:format:legacy|color:#ba521a:fontsize:10\ne,Current State:Settlement:ADH:PTN-:1::John|fillcolor:#E8EEF7,Current State:Finance:SIP-local:PTN-:1::Daniel|fillcolor:#E8EEF7,type:trades:volume:90:format:legacy|color:#ba521a:fontsize:10\ne,Current State:Settlement:ECN:PTN-:1::John|fillcolor:#E8EEF7,Current State:Finance:SIP-local:PTN-:1::Daniel|fillcolor:#E8EEF7:area:2,type:trades:volume:205:format:strategic|color:#ba521a:fontsize:10\ncp,Golden Sources:Current State\ncp,Capture:Current State\ncp,Lifecycle:Current State\ncp,Reporting:Current State\ncp,Settlement:Current State\ncp,Risk:Current State\ncp,Payments:Current State\ncp,Finance:Current State\nce,Golden Sources:Capture\nce,Capture:Lifecycle\nce,Lifecycle:Risk\nce,Risk:Reporting\nce,Reporting:Settlement\nce,Settlement:Payments\nce,Payments:Finance\ncs,Current State|bgcolor:#f0f2da:color:#49c1e5:margin:6:labeljust:r"
   :options
   (merge default-options
          {:layout "dot"
           :label "application&owner"
           :shape "rect"
           :splines "ortho"
           :cluster-on "function"
           :rankdir "TB"
           :nodesep 0.7
           :fontsize 8
           :post-process? true
           :pp-clusters {:y true :h true :x true :w true}
           :pp-anneal-bias "6"
           :pp-font "sans-serif"
           :pp-cluster-sep "0"
           :tooltip "application&id"
           :url "link"
           :constraint "false"
           :fixedsize "false"
           :num-cluster-edges "5"
           :concentrate "true"
           :edge-label "volume"
           })})


(defn ^:export example9b []
  {:data
"{
  \"header\": [
    \"view\",
    \"function\",
    \"application\",
    \"id\",
    \"level\",
    \"link\",
    \"owner\"
  ],
  \"edges\": [
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Settlement\",
        \"application\": \"ECN\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"John\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Finance\",
        \"application\": \"SIP-local\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Daniel\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"205\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"color\": \"#ba521a\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Settlement\",
        \"application\": \"ADH\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"John\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Finance\",
        \"application\": \"SIP-local\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Daniel\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"90\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"color\": \"#ba521a\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Settlement\",
        \"application\": \"hePikes\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"John\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Finance\",
        \"application\": \"SIP-local\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Daniel\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"147\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"color\": \"#ba521a\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Settlement\",
        \"application\": \"hePikes\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"John\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Payments\",
        \"application\": \"eFermi\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Loris\"
      },
      \"meta\": {
        \"type\": \"instructions\",
        \"volume\": \"5\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"color\": \"#81648c\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Settlement\",
        \"application\": \"hePikes\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"John\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Settlement\",
        \"application\": \"ECN\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"John\"
      },
      \"meta\": {
        \"type\": \"instructions\",
        \"volume\": \"90\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"color\": \"#9e5919\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Risk\",
        \"application\": \"GRIMACE\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Simone\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Settlement\",
        \"application\": \"hePikes\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"John\"
      },
      \"meta\": {
        \"type\": \"cash\",
        \"volume\": \"82\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"color\": \"#296640\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Risk\",
        \"application\": \"GRIMACE\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Simone\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Finance\",
        \"application\": \"SIP-local\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Daniel\"
      },
      \"meta\": {
        \"type\": \"pl-risk\",
        \"volume\": \"60\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"color\": \"#296640\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Risk\",
        \"application\": \"Guerilla Risk\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Simone\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Reporting\",
        \"application\": \"TradeDepo\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Paul\"
      },
      \"meta\": {
        \"type\": \"pl-risk\",
        \"volume\": \"60\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"color\": \"#296640\",
        \"fontsize\": \"10\",
        \"constraint\": \"true\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Risk\",
        \"application\": \"Guerilla Risk\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Simone\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Risk\",
        \"application\": \"GRIMACE\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Simone\"
      },
      \"meta\": {
        \"type\": \"pl-risk\",
        \"volume\": \"45\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"color\": \"#267a17\",
        \"fontsize\": \"10\",
        \"constraint\": \"true\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"Fidelity Plus\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Reporting\",
        \"application\": \"i-Assert(CZH)\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Paul\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"10\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"color\": \"#dd809e\",
        \"URL\": \"http://www.google.com\",
        \"labeltooltip\": \"Fidelity->i-Assert(CZH)\",
        \"edgetooltip\": \"Fidelity->i-Assert(CZH)\",
        \"fontcolor\": \"blue\",
        \"fontsize\": \"10\",
        \"penwidth\": \"2\",
        \"target\": \"_blank\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"CONFIRMATIONS\\nWriter\\nDoc\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Reporting\",
        \"application\": \"i-Assert(CZH)\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Paul\"
      },
      \"meta\": {
        \"type\": \"confirms\",
        \"volume\": \"40\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"color\": \"#dd809e\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"BAD Image\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Settlement\",
        \"application\": \"hePikes\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"John\"
      },
      \"meta\": {
        \"type\": \"positions\",
        \"volume\": \"45\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"color\": \"#81648c\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"BAD Image\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Payments\",
        \"application\": \"Kuiper\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Loris\"
      },
      \"meta\": {
        \"type\": \"positions\",
        \"volume\": \"8\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"color\": \"#81648c\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"BAD Image\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Payments\",
        \"application\": \"eFermi\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Loris\"
      },
      \"meta\": {
        \"type\": \"positions\",
        \"volume\": \"114\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"color\": \"#81648c\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"BAD Image\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Reporting\",
        \"application\": \"1-Charge\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Paul\"
      },
      \"meta\": {
        \"type\": \"positions\",
        \"volume\": \"114\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"color\": \"#267a17\",
        \"fontcolor\": \"red\",
        \"fontsize\": \"10\",
        \"labeltooltip\": \"BAD Image->1-Charge\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"BAD Image\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Risk\",
        \"application\": \"Guerilla Risk\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Simone\"
      },
      \"meta\": {
        \"type\": \"positions\",
        \"volume\": \"34\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"color\": \"#267a17\",
        \"fontcolor\": \"red\",
        \"fontsize\": \"10\",
        \"labeltooltip\": \"BAD Image->Guerilla Risk\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"FORPS-bus\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"BAD Image\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"202\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"style\": \"invis\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"FORPS-bus\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"FORPS-bus\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"12\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"style\": \"invis\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"sysTicket\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"CONFIRMATIONS\\nWriter\\nDoc\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"370\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"style\": \"dotted\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"sysTicket\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Reporting\",
        \"application\": \"TradeDepo\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Paul\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"245\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"color\": \"#a6a8e0\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"sysTicket\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"Fidelity Plus\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"190\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"color\": \"#a6a8e0\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"War\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"BAD Image\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"101\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"color\": \"#a6a8e0\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"HCB\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"BAD Image\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"45\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"color\": \"#a6a8e0\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"War\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Reporting\",
        \"application\": \"noShock\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Paul\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"37\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"color\": \"#a6a8e0\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"War\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Settlement\",
        \"application\": \"ADH\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"John\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"34\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"color\": \"#a6a8e0\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"HCB\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Settlement\",
        \"application\": \"ECN\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"John\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"105\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"style\": \"dotted\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"HCB\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Settlement\",
        \"application\": \"hePikes\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"John\"
      },
      \"meta\": {
        \"type\": \"trades\",
        \"volume\": \"102\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"style\": \"dotted\",
        \"fontsize\": \"10\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Clients\",
        \"id\": \"PTN-675664\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"ERP\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"meta\": {
        \"type\": \"clients\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"style\": \"invis\",
        \"fontsize\": \"10\",
        \"constraint\": \"true\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Employee\",
        \"id\": \"PTN-23\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Affinity\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"meta\": {
        \"type\": \"employees\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"style\": \"invis\",
        \"fontsize\": \"10\",
        \"constraint\": \"true\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Instrument\",
        \"id\": \"PTN-2345\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"P-RAM\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"meta\": {
        \"type\": \"instruments\",
        \"format\": \"strategic\"
      },
      \"style\": {
        \"style\": \"invis\",
        \"fontsize\": \"10\",
        \"constraint\": \"true\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Products\",
        \"id\": \"PTN-6538\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Instrument+Hub\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"meta\": {
        \"type\": \"products\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"style\": \"invis\",
        \"fontsize\": \"10\",
        \"constraint\": \"true\"
      }
    },
    {
      \"src\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Books\",
        \"id\": \"PTN-1234\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"dst\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Books\",
        \"id\": \"PTN-1234\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"meta\": {
        \"type\": \"books\",
        \"format\": \"legacy\"
      },
      \"style\": {
        \"style\": \"invis\",
        \"fontsize\": \"10\"
      }
    }
  ],
  \"nodes\": [
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"War\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"style\": {
        \"fillcolor\": \"#c6ddf2\",
        \"shape\": \"box\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Risk\",
        \"application\": \"GRIMACE\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Simone\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Risk\",
        \"application\": \"Guerilla Risk\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Simone\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"CONFIRMATIONS\\nWriter\\nDoc\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\",
        \"shape\": \"box\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Settlement\",
        \"application\": \"ECN\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"John\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"HCB\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"style\": {
        \"fillcolor\": \"#c6ddf2\",
        \"shape\": \"box\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Books\",
        \"id\": \"PTN-1234\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"style\": {
        \"fillcolor\": \"#EEBD1B\",
        \"shape\": \"cylinder\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Payments\",
        \"application\": \"eFermi\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Loris\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Instrument+Hub\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Reporting\",
        \"application\": \"1-Charge\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Paul\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Reporting\",
        \"application\": \"TradeDepo\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Paul\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"Fidelity Plus\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Settlement\",
        \"application\": \"hePikes\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"John\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Settlement\",
        \"application\": \"ADH\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"John\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Finance\",
        \"application\": \"SIP-local\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Daniel\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Affinity\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"P-RAM\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Instrument\",
        \"id\": \"PTN-2345\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"style\": {
        \"fillcolor\": \"#EEBD1B\",
        \"shape\": \"cylinder\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Payments\",
        \"application\": \"Kuiper\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Loris\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Lifecycle\",
        \"application\": \"BAD Image\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Clients\",
        \"id\": \"PTN-675664\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"style\": {
        \"fillcolor\": \"#EEBD1B\",
        \"shape\": \"cylinder\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Reporting\",
        \"application\": \"noShock\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Paul\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"ERP\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Reporting\",
        \"application\": \"i-Assert(CZH)\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Paul\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"FORPS-bus\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"style\": {
        \"fillcolor\": \"#c6ddf2\",
        \"shape\": \"box\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Employee\",
        \"id\": \"PTN-23\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"style\": {
        \"fillcolor\": \"#EEBD1B\",
        \"shape\": \"cylinder\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Golden Sources\",
        \"application\": \"Products\",
        \"id\": \"PTN-6538\",
        \"level\": \"1\",
        \"link\": \"https://en.wikipedia.org/wiki/Reference_data\",
        \"owner\": \"Jacob\"
      },
      \"style\": {
        \"fillcolor\": \"#EEBD1B\",
        \"shape\": \"cylinder\"
      }
    },
    {
      \"node\": {
        \"view\": \"Current State\",
        \"function\": \"Capture\",
        \"application\": \"sysTicket\",
        \"id\": \"PTN-\",
        \"level\": \"1\",
        \"link\": \"\",
        \"owner\": \"Ruth\"
      },
      \"style\": {
        \"fillcolor\": \"#E8EEF7\"
      }
    }
  ],
  \"cluster-parents\": [
    [
      \"Golden Sources\",
      \"Current State\"
    ],
    [
      \"Capture\",
      \"Current State\"
    ],
    [
      \"Lifecycle\",
      \"Current State\"
    ],
    [
      \"Reporting\",
      \"Current State\"
    ],
    [
      \"Settlement\",
      \"Current State\"
    ],
    [
      \"Risk\",
      \"Current State\"
    ],
    [
      \"Payments\",
      \"Current State\"
    ],
    [
      \"Finance\",
      \"Current State\"
    ]
  ],
  \"cluster-edges\": [
    [
      \"Golden Sources\",
      \"Capture\"
    ],
    [
      \"Capture\",
      \"Lifecycle\"
    ],
    [
      \"Lifecycle\",
      \"Risk\"
    ],
    [
      \"Risk\",
      \"Reporting\"
    ],
    [
      \"Reporting\",
      \"Settlement\"
    ],
    [
      \"Settlement\",
      \"Payments\"
    ],
    [
      \"Payments\",
      \"Finance\"
    ]
  ],
  \"cluster-styles\": {
    \"Current State\": {
      \"bgcolor\": \"#f0f2da\",
      \"color\": \"#49c1e5\",
      \"margin\": \"6\",
      \"labeljust\": \"r\"
    }
  }
}
"
   :options
   (merge default-options
          {:layout "dot"
           :label "application&owner"
           :shape "rect"
           :splines "ortho"
           :cluster-on "function"
           :rankdir "TB"
           :nodesep 0.7
           :fontsize 8
           :post-process? true
           :pp-clusters {:y true :h true :x true :w true}
           :pp-anneal-bias "6"
           :pp-font "sans-serif"
           :pp-cluster-sep "0"
           :tooltip "application&id"
           :url "link"
           :constraint "false"
           :fixedsize "false"
           :num-cluster-edges "5"
           :concentrate "true"
           :edge-label "volume"
           })})


