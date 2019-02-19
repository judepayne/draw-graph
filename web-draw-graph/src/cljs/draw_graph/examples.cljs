(ns draw-graph.examples)

(def default-options
  {:label ""
   :hide-leaves? false
   :show-roots? false
   :shape "ellipse"
   :layout "dot"
   :cluster-on ""
   :rankdir "LR"
   :fixedsize "true"
   :elide 0
   :splines "splines"
   :overlap "false"
   :concentrate "false"})

;; ------------------
;; example 1: friendship graph

(defn ^:export example1 []
  {:data "animal:name
pandas:simone,pandas:max
pandas:sharhar,pandas:summer
pandas:nikkai,pandas:isobel
pandas:malakai,pandas:delila
pandas:cristolene,pandas:sharhar
pandas:kacey,pandas:sharhar#shape:rect:fillcolor:blue:fontcolor:white
pandas:malakai,pandas:ivy
pandas:max,pandas:Bridget,color:blue
pandas:ivy,squirrels:huxley,color:red
pandas:kacey,brownbears:cosmo,color:deeppink
brownbears:cosmo#shape:septagon:style:filled,brownbears:eliza,color:deeppink
pandas:simone,pandas:ivy,color:green2
pandas:simone,pandas:summer,color:green2
pandas#bgcolor:cornsilk1:style:rounded
brownbears#bgcolor:palegreen:color:limegreen:margin:20
squirrels#bgcolor:pink:style:rounded:margin:15"
   :options
   (merge default-options
          {:layout "dot"
           :cluster-on "animal"
           :label "name"
           :shape "ellipse"
           :splines "lines"
           :overlap "false"
           :rankdir "TB"})})


;; ------------------
;; example 2&3: two trees

(defn ^:export example2 []
  {:data "tree:id\nClient:a1,Client:b1\nClient:a1,Client:b2\nClient:a1,Client:b3\nClient:a1,Client:b4\nClient:a1,Client:b5\nClient:a1,Client:b6\nClient:a1,Client:b7\nClient:a1,Client:b8\nClient:b1,Client:c1\nClient:b1,Client:c2\nClient:b2,Client:c3\nClient:b2,Client:c4\nClient:b3,Client:c5\nClient:b3,Client:c6\nClient:b4,Client:c7\nClient:b4,Client:c8\nClient:b5,Client:c9\nClient:b5,Client:c10\nClient:b6,Client:c11\nClient:b6,Client:c12\nClient:b7,Client:c13\nClient:b7,Client:c14\nClient:b8,Client:c15\nClient:b8,Client:c16\nServer:b1,Server:a1,dir:back\nServer:b2,Server:a1,dir:back\nServer:b3,Server:a1,dir:back\nServer:b4,Server:a1,dir:back\nServer:b5,Server:a1,dir:back\nServer:b6,Server:a1,dir:back\nServer:b7,Server:a1,dir:back\nServer:b8,Server:a1,dir:back\nServer:b9,Server:a1,dir:back\nServer:b10,Server:a1,dir:back\nServer:c1,Server:b1,dir:back\nServer:c2,Server:b1,dir:back\nServer:c3,Server:b1,dir:back\nServer:c4,Server:b2,dir:back\nServer:c5,Server:b2,dir:back\nServer:c6,Server:b2,dir:back\nServer:c7,Server:b3,dir:back\nServer:c8,Server:b3,dir:back\nServer:c9,Server:b3,dir:back\nServer:c10,Server:b4,dir:back\nServer:c11,Server:b4,dir:back\nServer:c12,Server:b4,dir:back\nServer:c13,Server:b5,dir:back\nServer:c14,Server:b5,dir:back\nServer:c15,Server:b5,dir:back\nServer:c16,Server:b6,dir:back\nServer:c17,Server:b6,dir:back\nServer:c18,Server:b6,dir:back\nServer:c19,Server:b7,dir:back\nServer:c20,Server:b7,dir:back\nServer:c21,Server:b7,dir:back\nServer:c22,Server:b8,dir:back\nServer:c23,Server:b8,dir:back\nServer:c24,Server:b8,dir:back\nServer:c25,Server:b9,dir:back\nServer:c26,Server:b9,dir:back\nServer:c27,Server:b9,dir:back\nServer:c28,Server:b10,dir:back\nServer:c29,Server:b10,dir:back\nServer:c30,Server:b10,dir:back\nClient:c8,Server:c1,minlen:10:style:dotted\nClient:c4,Server:c16,minlen:10:style:dotted\nClient:c8,Server:c29,minlen:10:style:dotted\nClient:c13,Server:c24,minlen:10:style:dotted\nClient:c1,Server:c10,minlen:10:style:dotted\nClient:c7,Server:c14,minlen:10:style:dotted\nClient:c9,Server:c23,minlen:10:style:dotted\nClient:c11,Server:c16,minlen:10:style:dotted\nClient:c6,Server:c18,minlen:10:style:dotted\nClient:c10,Server:c22,minlen:10:style:dotted\nClient:c1,Server:c15,minlen:10:style:dotted\nClient:c8,Server:c26,minlen:10:style:dotted\nClient:c9,Server:c18,minlen:10:style:dotted\nClient:c5,Server:c12,minlen:10:style:dotted\nClient:c7,Server:c10,minlen:10:style:dotted\nClient:c16,Server:c23,minlen:10:style:dotted\nClient:c12,Server:c1,minlen:10:style:dotted\nClient:c16,Server:c3,minlen:10:style:dotted\nClient:c15,Server:c3,minlen:10:style:dotted\nClient:c11,Server:c3,minlen:10:style:dotted"
   :options
   (merge default-options
          {:layout "dot"
           :cluster-on "tree"
           :label "id"
           :shape "folder"
           :splines "ortho"
           :overlap "false"})})


(defn ^:export example3 []
  {:data "tree:id\nClient:a1,Client:b1\nClient:a1,Client:b2\nClient:a1,Client:b3\nClient:a1,Client:b4\nClient:a1,Client:b5\nClient:a1,Client:b6\nClient:a1,Client:b7\nClient:a1,Client:b8\nClient:b1,Client:c1\nClient:b1,Client:c2\nClient:b2,Client:c3\nClient:b2,Client:c4\nClient:b3,Client:c5\nClient:b3,Client:c6\nClient:b4,Client:c7\nClient:b4,Client:c8\nClient:b5,Client:c9\nClient:b5,Client:c10\nClient:b6,Client:c11\nClient:b6,Client:c12\nClient:b7,Client:c13\nClient:b7,Client:c14\nClient:b8,Client:c15\nClient:b8,Client:c16\nServer:a1,Server:b1\nServer:a1,Server:b2\nServer:a1,Server:b3\nServer:a1,Server:b4\nServer:a1,Server:b5\nServer:a1,Server:b6\nServer:a1,Server:b7\nServer:a1,Server:b8\nServer:a1,Server:b9\nServer:a1,Server:b10\nServer:b1,Server:c1\nServer:b1,Server:c2\nServer:b1,Server:c3\nServer:b1,Server:c4\nServer:b2,Server:c5\nServer:b2,Server:c6\nServer:b3,Server:c7\nServer:b3,Server:c8\nServer:b3,Server:c9\nServer:b4,Server:c10\nServer:b4,Server:c11\nServer:b4,Server:c12\nServer:b5,Server:c13\nServer:b5,Server:c14\nServer:b5,Server:c15\nServer:b6,Server:c16\nServer:b6,Server:c17\nServer:b6,Server:c18\nServer:b7,Server:c19\nServer:b7,Server:c20\nServer:b7,Server:c21\nServer:b8,Server:c22\nServer:b8,Server:c23\nServer:b8,Server:c24\nServer:b9,Server:c25\nServer:b9,Server:c26\nServer:b9,Server:c27\nServer:b10,Server:c28\nServer:b10,Server:c29\nServer:b10,Server:c30\nClient:c8,Server:c1\nClient:c4,Server:c16\nClient:c8,Server:c29\nClient:c13,Server:c24\nClient:c1,Server:c10\nClient:c7,Server:c14\nClient:c9,Server:c23\nClient:c11,Server:c16\nClient:c6,Server:c18\nClient:c10,Server:c22\nClient:c1,Server:c15\nClient:c8,Server:c26\nClient:c9,Server:c18\nClient:c5,Server:c12\nClient:c7,Server:c10\nClient:c16,Server:c23\nClient:c12,Server:c1\nClient:c16,Server:c3\nClient:c15,Server:c3\nClient:c11,Server:c3\n"
   :options
   (merge default-options
          {:layout "dot"
           :cluster-on "tree"
           :label "id"
           :shape "folder"
           :splines "line"
           :overlap "false"})})


;; ------------------
;; example 4 : stanford emails

(defn ^:export example4 []
  {:data "id\n0,1\n2,3\n2,4\n5,6\n5,7\n8,9\n10,11\n12,13\n12,14\n15,16\n17,18\n12,19\n20,21\n20,22\n23,24\n23,25\n23,26\n23,27\n23,28\n23,29\n23,30\n23,31\n23,32\n23,33\n23,34\n23,35\n23,36\n23,37\n23,38\n23,39\n23,40\n41,42\n43,44\n45,46\n47,48\n49,50\n41,51\n52,53\n54,55\n54,56\n54,57\n54,58\n54,59\n60,61\n54,54\n62,63\n64,65\n62,4\n66,67\n68,69\n42,41\n70,71\n72,21\n71,70\n73,74\n75,76\n75,48\n77,78\n77,79\n80,81\n80,68\n19,62\n82,83\n22,21\n82,84\n21,72\n41,85\n41,86\n41,87\n82,86\n88,89\n90,91\n92,20\n41,93\n41,94\n41,95\n89,96\n89,88\n97,98\n97,99\n97,100\n97,101\n97,102\n103,104\n51,41\n82,105\n90,106\n62,107\n108,109\n108,66\n108,110\n108,111\n108,112\n113,114\n115,116\n117,118\n76,119\n17,120\n82,121\n122,123\n14,12\n124,125\n13,126\n127,128\n127,129\n127,130\n131,132\n40,26\n40,29\n18,133\n56,55\n56,54\n56,59\n134,6\n115,62\n135,136\n137,138\n137,137\n22,20\n139,140\n141,142\n143,143\n143,51\n143,133\n144,145\n146,147\n83,82\n148,149\n150,103\n150,150\n49,84\n151,28\n152,153\n153,152\n154,155\n156,157\n139,15\n158,159\n4,2\n4,3\n133,18\n160,161\n84,162\n84,50\n84,49\n84,71\n72,163\n164,139\n165,166\n167,168\n123,122\n169,115\n169,170\n40,171\n123,103\n123,172\n123,61\n123,123\n24,96\n81,80\n173,21\n174,175\n176,177\n176,178\n122,179\n21,22\n180,130\n181,182\n129,183\n184,184\n181,179\n185,52\n70,186\n106,187\n137,175\n137,174\n188,189\n108,190\n191,157\n191,191\n192,193\n192,194\n192,195\n192,2\n192,192\n41,196\n41,197\n41,198\n41,199\n41,200\n41,167\n41,201\n41,202\n41,203\n41,204\n41,205\n41,206\n41,207\n208,208\n61,123\n209,210\n41,128\n211,54\n115,212\n106,189\n137,208\n212,115\n56,58\n30,25\n30,36\n30,41\n155,213\n48,47\n214,180\n96,24\n4,4\n4,62\n155,215\n216,15\n170,170\n71,217\n71,50\n71,49\n13,13\n98,97\n74,1\n74,218\n74,219\n74,215\n74,220\n74,221\n74,222\n74,223\n74,18\n74,224\n74,225\n74,226\n74,227\n74,17\n74,228\n229,64\n100,97\n230,21\n230,20\n231,232\n233,209\n233,234\n233,235\n233,236\n233,159\n233,237\n233,210\n233,238\n233,239\n233,240\n233,241\n233,242\n233,243\n233,244\n245,115\n246,247\n248,74\n13,238\n106,62\n106,249\n13,27\n13,209\n103,250\n40,251\n175,252\n169,251\n115,169\n232,231\n75,253\n75,40\n175,174\n254,137\n249,212\n249,255\n249,256\n222,74\n183,257\n17,218\n183,198\n183,258\n183,183\n19,12\n259,72\n259,260\n75,261\n115,170\n251,169\n262,262\n263,263\n264,265\n264,266\n264,267\n106,268\n269,45\n129,270\n271,272\n81,256\n46,139\n46,15\n46,273\n46,272\n46,274\n46,164\n46,216\n46,45\n275,276\n277,277\n155,114\n158,62\n129,278\n101,101\n29,40\n279,107\n155,208\n231,280\n281,281\n282,283\n155,284\n46,46\n160,28\n160,23\n285,286\n285,211\n258,183\n69,287\n280,231\n212,249\n162,288\n162,71\n162,84\n280,289\n280,270\n280,196\n280,168\n280,167\n280,290\n280,203\n280,14\n280,291\n280,284\n280,129\n280,130\n280,292\n293,19\n254,226\n129,294\n189,106\n295,296\n165,115\n287,69\n287,80\n74,248\n74,297\n74,73\n298,299\n281,137\n"
   :options
   (merge default-options
          {:layout "dot"
           :label "id"
           :shape "box"
           :cluster-on ""
           :splines "spline"
           :overlap "false"})})


;; ------------------
;; circular tree

(defn ^:export example5 []
  {:data "tree:layer:id\ncirc:a:1,circ:b:1\ncirc:a:1,circ:b:2\ncirc:a:1,circ:b:3\ncirc:a:1,circ:b:4\ncirc:a:1,circ:b:5\ncirc:b:1,circ:c:1\ncirc:b:1,circ:c:2\ncirc:b:1,circ:c:3\ncirc:b:2,circ:c:4\ncirc:b:2,circ:c:5\ncirc:b:2,circ:c:6\ncirc:b:3,circ:c:7\ncirc:b:3,circ:c:8\ncirc:b:3,circ:c:9\ncirc:b:4,circ:c:10\ncirc:b:4,circ:c:11\ncirc:b:4,circ:c:12\ncirc:b:5,circ:c:13\ncirc:b:5,circ:c:14\ncirc:b:5,circ:c:15\ncirc:c:1,circ:d:1\ncirc:c:1,circ:d:2\ncirc:c:1,circ:d:3\ncirc:c:1,circ:d:4\ncirc:c:1,circ:d:5\ncirc:c:2,circ:d:6\ncirc:c:2,circ:d:7\ncirc:c:2,circ:d:8\ncirc:c:2,circ:d:9\ncirc:c:2,circ:d:10\ncirc:c:3,circ:d:11\ncirc:c:3,circ:d:12\ncirc:c:3,circ:d:13\ncirc:c:3,circ:d:14\ncirc:c:3,circ:d:15\ncirc:c:4,circ:d:16\ncirc:c:4,circ:d:17\ncirc:c:4,circ:d:18\ncirc:c:4,circ:d:19\ncirc:c:4,circ:d:20\ncirc:c:5,circ:d:21\ncirc:c:5,circ:d:22\ncirc:c:5,circ:d:23\ncirc:c:5,circ:d:24\ncirc:c:5,circ:d:25\ncirc:c:6,circ:d:26\ncirc:c:6,circ:d:27\ncirc:c:6,circ:d:28\ncirc:c:6,circ:d:29\ncirc:c:6,circ:d:30\ncirc:c:7,circ:d:31\ncirc:c:7,circ:d:32\ncirc:c:7,circ:d:33\ncirc:c:7,circ:d:34\ncirc:c:7,circ:d:35\ncirc:c:8,circ:d:36\ncirc:c:8,circ:d:37\ncirc:c:8,circ:d:38\ncirc:c:8,circ:d:39\ncirc:c:8,circ:d:40\ncirc:c:9,circ:d:41\ncirc:c:9,circ:d:42\ncirc:c:9,circ:d:43\ncirc:c:9,circ:d:44\ncirc:c:9,circ:d:45\ncirc:c:10,circ:d:46\ncirc:c:10,circ:d:47\ncirc:c:10,circ:d:48\ncirc:c:10,circ:d:49\ncirc:c:10,circ:d:50\ncirc:c:11,circ:d:51\ncirc:c:11,circ:d:52\ncirc:c:11,circ:d:53\ncirc:c:11,circ:d:54\ncirc:c:11,circ:d:55\ncirc:c:12,circ:d:56\ncirc:c:12,circ:d:57\ncirc:c:12,circ:d:58\ncirc:c:12,circ:d:59\ncirc:c:12,circ:d:60\ncirc:c:13,circ:d:61\ncirc:c:13,circ:d:62\ncirc:c:13,circ:d:63\ncirc:c:13,circ:d:64\ncirc:c:13,circ:d:65\ncirc:c:14,circ:d:66\ncirc:c:14,circ:d:67\ncirc:c:14,circ:d:68\ncirc:c:14,circ:d:69\ncirc:c:14,circ:d:70\ncirc:c:15,circ:d:71\ncirc:c:15,circ:d:72\ncirc:c:15,circ:d:73\ncirc:c:15,circ:d:74\ncirc:c:15,circ:d:75\n"
   :options
   (merge default-options
          {:layout "neato"
           :label "layer"
           :cluster-on "id"
           :shape "circle"
           :splines "curved"
           :overlap "ipsep"
           :ranksep "1.7"
           :scale "1.3"})})




