(ns draw-graph.examples)


(def default-options
  {:label ""
   :hide-leaves? false
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
   :pp-font ""
   :tooltip ""
   :url ""})


;; ------------------
;; example 1: friendship graph

(defn ^:export example1 []
  {:data
"h:animal:name
e:pandas:simone,pandas:max
e:pandas:sharhar,pandas:summer
e:pandas:nikkai,pandas:isobel
e:pandas:malakai,pandas:delila
e:pandas:cristolene,pandas:sharhar
e:pandas:kacey,pandas:sharhar|shape:rect:fillcolor:blue:fontcolor:white
e:pandas:malakai,pandas:ivy
e:pandas:max,pandas:Bridget,|color:blue
e:pandas:ivy,squirrels:huxley,|color:red
e:pandas:kacey,brownbears:cosmo,|color:deeppink
e:brownbears:cosmo|shape:septagon:style:filled,brownbears:eliza,|color:deeppink
e:pandas:simone,pandas:ivy,|color:green2
e:pandas:simone,pandas:summer,|color:green2
cs:pandas|bgcolor:cornsilk1:style:rounded
cs:brownbears|bgcolor:palegreen:color:limegreen:margin:20
cs:squirrels|bgcolor:pink:style:rounded:margin:15"
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
  {:data "h:tree:id\ne:Client:a1,Client:b1\ne:Client:a1,Client:b2\ne:Client:a1,Client:b3\ne:Client:a1,Client:b4\ne:Client:a1,Client:b5\ne:Client:a1,Client:b6\ne:Client:a1,Client:b7\ne:Client:a1,Client:b8\ne:Client:b1,Client:c1\ne:Client:b1,Client:c2\ne:Client:b2,Client:c3\ne:Client:b2,Client:c4\ne:Client:b3,Client:c5\ne:Client:b3,Client:c6\ne:Client:b4,Client:c7\ne:Client:b4,Client:c8\ne:Client:b5,Client:c9\ne:Client:b5,Client:c10\ne:Client:b6,Client:c11\ne:Client:b6,Client:c12\ne:Client:b7,Client:c13\ne:Client:b7,Client:c14\ne:Client:b8,Client:c15\ne:Client:b8,Client:c16\ne:Server:b1,Server:a1,|dir:back\ne:Server:b2,Server:a1,|dir:back\ne:Server:b3,Server:a1,|dir:back\ne:Server:b4,Server:a1,|dir:back\ne:Server:b5,Server:a1,|dir:back\ne:Server:b6,Server:a1,|dir:back\ne:Server:b7,Server:a1,|dir:back\ne:Server:b8,Server:a1,|dir:back\ne:Server:b9,Server:a1,|dir:back\ne:Server:b10,Server:a1,|dir:back\ne:Server:c1,Server:b1,|dir:back\ne:Server:c2,Server:b1,|dir:back\ne:Server:c3,Server:b1,|dir:back\ne:Server:c4,Server:b2,|dir:back\ne:Server:c5,Server:b2,|dir:back\ne:Server:c6,Server:b2,|dir:back\ne:Server:c7,Server:b3,|dir:back\ne:Server:c8,Server:b3,|dir:back\ne:Server:c9,Server:b3,|dir:back\ne:Server:c10,Server:b4,|dir:back\ne:Server:c11,Server:b4,|dir:back\ne:Server:c12,Server:b4,|dir:back\ne:Server:c13,Server:b5,|dir:back\ne:Server:c14,Server:b5,|dir:back\ne:Server:c15,Server:b5,|dir:back\ne:Server:c16,Server:b6,|dir:back\ne:Server:c17,Server:b6,|dir:back\ne:Server:c18,Server:b6,|dir:back\ne:Server:c19,Server:b7,|dir:back\ne:Server:c20,Server:b7,|dir:back\ne:Server:c21,Server:b7,|dir:back\ne:Server:c22,Server:b8,|dir:back\ne:Server:c23,Server:b8,|dir:back\ne:Server:c24,Server:b8,|dir:back\ne:Server:c25,Server:b9,|dir:back\ne:Server:c26,Server:b9,|dir:back\ne:Server:c27,Server:b9,|dir:back\ne:Server:c28,Server:b10,|dir:back\ne:Server:c29,Server:b10,|dir:back\ne:Server:c30,Server:b10,|dir:back\ne:Client:c8,Server:c1,|minlen:10:style:dotted\ne:Client:c4,Server:c16,|minlen:10:style:dotted\ne:Client:c8,Server:c29,|minlen:10:style:dotted\ne:Client:c13,Server:c24,|minlen:10:style:dotted\ne:Client:c1,Server:c10,|minlen:10:style:dotted\ne:Client:c7,Server:c14,|minlen:10:style:dotted\ne:Client:c9,Server:c23,|minlen:10:style:dotted\ne:Client:c11,Server:c16,|minlen:10:style:dotted\ne:Client:c6,Server:c18,|minlen:10:style:dotted\ne:Client:c10,Server:c22,|minlen:10:style:dotted\ne:Client:c1,Server:c15,|minlen:10:style:dotted\ne:Client:c8,Server:c26,|minlen:10:style:dotted\ne:Client:c9,Server:c18,|minlen:10:style:dotted\ne:Client:c5,Server:c12,|minlen:10:style:dotted\ne:Client:c7,Server:c10,|minlen:10:style:dotted\ne:Client:c16,Server:c23,|minlen:10:style:dotted\ne:Client:c12,Server:c1,|minlen:10:style:dotted\ne:Client:c16,Server:c3,|minlen:10:style:dotted\ne:Client:c15,Server:c3,|minlen:10:style:dotted\ne:Client:c11,Server:c3,|minlen:10:style:dotted"
   :options
   (merge default-options
          {:layout "dot"
           :cluster-on "tree"
           :label "id"
           :shape "folder"
           :splines "ortho"
           :overlap "false"})})


(defn ^:export example3 []
  {:data "h:tree:id\ne:Client:a1,Client:b1\ne:Client:a1,Client:b2\ne:Client:a1,Client:b3\ne:Client:a1,Client:b4\ne:Client:a1,Client:b5\ne:Client:a1,Client:b6\ne:Client:a1,Client:b7\ne:Client:a1,Client:b8\ne:Client:b1,Client:c1\ne:Client:b1,Client:c2\ne:Client:b2,Client:c3\ne:Client:b2,Client:c4\ne:Client:b3,Client:c5\ne:Client:b3,Client:c6\ne:Client:b4,Client:c7\ne:Client:b4,Client:c8\ne:Client:b5,Client:c9\ne:Client:b5,Client:c10\ne:Client:b6,Client:c11\ne:Client:b6,Client:c12\ne:Client:b7,Client:c13\ne:Client:b7,Client:c14\ne:Client:b8,Client:c15\ne:Client:b8,Client:c16\ne:Server:a1,Server:b1\ne:Server:a1,Server:b2\ne:Server:a1,Server:b3\ne:Server:a1,Server:b4\ne:Server:a1,Server:b5\ne:Server:a1,Server:b6\ne:Server:a1,Server:b7\ne:Server:a1,Server:b8\ne:Server:a1,Server:b9\ne:Server:a1,Server:b10\ne:Server:b1,Server:c1\ne:Server:b1,Server:c2\ne:Server:b1,Server:c3\ne:Server:b1,Server:c4\ne:Server:b2,Server:c5\ne:Server:b2,Server:c6\ne:Server:b3,Server:c7\ne:Server:b3,Server:c8\ne:Server:b3,Server:c9\ne:Server:b4,Server:c10\ne:Server:b4,Server:c11\ne:Server:b4,Server:c12\ne:Server:b5,Server:c13\ne:Server:b5,Server:c14\ne:Server:b5,Server:c15\ne:Server:b6,Server:c16\ne:Server:b6,Server:c17\ne:Server:b6,Server:c18\ne:Server:b7,Server:c19\ne:Server:b7,Server:c20\ne:Server:b7,Server:c21\ne:Server:b8,Server:c22\ne:Server:b8,Server:c23\ne:Server:b8,Server:c24\ne:Server:b9,Server:c25\ne:Server:b9,Server:c26\ne:Server:b9,Server:c27\ne:Server:b10,Server:c28\ne:Server:b10,Server:c29\ne:Server:b10,Server:c30\ne:Client:c8,Server:c1\ne:Client:c4,Server:c16\ne:Client:c8,Server:c29\ne:Client:c13,Server:c24\ne:Client:c1,Server:c10\ne:Client:c7,Server:c14\ne:Client:c9,Server:c23\ne:Client:c11,Server:c16\ne:Client:c6,Server:c18\ne:Client:c10,Server:c22\ne:Client:c1,Server:c15\ne:Client:c8,Server:c26\ne:Client:c9,Server:c18\ne:Client:c5,Server:c12\ne:Client:c7,Server:c10\ne:Client:c16,Server:c23\ne:Client:c12,Server:c1\ne:Client:c16,Server:c3\ne:Client:c15,Server:c3\ne:Client:c11,Server:c3"
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
  {:data "h:id\ne:0,1\ne:2,3\ne:2,4\ne:5,6\ne:5,7\ne:8,9\ne:10,11\ne:12,13\ne:12,14\ne:15,16\ne:17,18\ne:12,19\ne:20,21\ne:20,22\ne:23,24\ne:23,25\ne:23,26\ne:23,27\ne:23,28\ne:23,29\ne:23,30\ne:23,31\ne:23,32\ne:23,33\ne:23,34\ne:23,35\ne:23,36\ne:23,37\ne:23,38\ne:23,39\ne:23,40\ne:41,42\ne:43,44\ne:45,46\ne:47,48\ne:49,50\ne:41,51\ne:52,53\ne:54,55\ne:54,56\ne:54,57\ne:54,58\ne:54,59\ne:60,61\ne:54,54\ne:62,63\ne:64,65\ne:62,4\ne:66,67\ne:68,69\ne:42,41\ne:70,71\ne:72,21\ne:71,70\ne:73,74\ne:75,76\ne:75,48\ne:77,78\ne:77,79\ne:80,81\ne:80,68\ne:19,62\ne:82,83\ne:22,21\ne:82,84\ne:21,72\ne:41,85\ne:41,86\ne:41,87\ne:82,86\ne:88,89\ne:90,91\ne:92,20\ne:41,93\ne:41,94\ne:41,95\ne:89,96\ne:89,88\ne:97,98\ne:97,99\ne:97,100\ne:97,101\ne:97,102\ne:103,104\ne:51,41\ne:82,105\ne:90,106\ne:62,107\ne:108,109\ne:108,66\ne:108,110\ne:108,111\ne:108,112\ne:113,114\ne:115,116\ne:117,118\ne:76,119\ne:17,120\ne:82,121\ne:122,123\ne:14,12\ne:124,125\ne:13,126\ne:127,128\ne:127,129\ne:127,130\ne:131,132\ne:40,26\ne:40,29\ne:18,133\ne:56,55\ne:56,54\ne:56,59\ne:134,6\ne:115,62\ne:135,136\ne:137,138\ne:137,137\ne:22,20\ne:139,140\ne:141,142\ne:143,143\ne:143,51\ne:143,133\ne:144,145\ne:146,147\ne:83,82\ne:148,149\ne:150,103\ne:150,150\ne:49,84\ne:151,28\ne:152,153\ne:153,152\ne:154,155\ne:156,157\ne:139,15\ne:158,159\ne:4,2\ne:4,3\ne:133,18\ne:160,161\ne:84,162\ne:84,50\ne:84,49\ne:84,71\ne:72,163\ne:164,139\ne:165,166\ne:167,168\ne:123,122\ne:169,115\ne:169,170\ne:40,171\ne:123,103\ne:123,172\ne:123,61\ne:123,123\ne:24,96\ne:81,80\ne:173,21\ne:174,175\ne:176,177\ne:176,178\ne:122,179\ne:21,22\ne:180,130\ne:181,182\ne:129,183\ne:184,184\ne:181,179\ne:185,52\ne:70,186\ne:106,187\ne:137,175\ne:137,174\ne:188,189\ne:108,190\ne:191,157\ne:191,191\ne:192,193\ne:192,194\ne:192,195\ne:192,2\ne:192,192\ne:41,196\ne:41,197\ne:41,198\ne:41,199\ne:41,200\ne:41,167\ne:41,201\ne:41,202\ne:41,203\ne:41,204\ne:41,205\ne:41,206\ne:41,207\ne:208,208\ne:61,123\ne:209,210\ne:41,128\ne:211,54\ne:115,212\ne:106,189\ne:137,208\ne:212,115\ne:56,58\ne:30,25\ne:30,36\ne:30,41\ne:155,213\ne:48,47\ne:214,180\ne:96,24\ne:4,4\ne:4,62\ne:155,215\ne:216,15\ne:170,170\ne:71,217\ne:71,50\ne:71,49\ne:13,13\ne:98,97\ne:74,1\ne:74,218\ne:74,219\ne:74,215\ne:74,220\ne:74,221\ne:74,222\ne:74,223\ne:74,18\ne:74,224\ne:74,225\ne:74,226\ne:74,227\ne:74,17\ne:74,228\ne:229,64\ne:100,97\ne:230,21\ne:230,20\ne:231,232\ne:233,209\ne:233,234\ne:233,235\ne:233,236\ne:233,159\ne:233,237\ne:233,210\ne:233,238\ne:233,239\ne:233,240\ne:233,241\ne:233,242\ne:233,243\ne:233,244\ne:245,115\ne:246,247\ne:248,74\ne:13,238\ne:106,62\ne:106,249\ne:13,27\ne:13,209\ne:103,250\ne:40,251\ne:175,252\ne:169,251\ne:115,169\ne:232,231\ne:75,253\ne:75,40\ne:175,174\ne:254,137\ne:249,212\ne:249,255\ne:249,256\ne:222,74\ne:183,257\ne:17,218\ne:183,198\ne:183,258\ne:183,183\ne:19,12\ne:259,72\ne:259,260\ne:75,261\ne:115,170\ne:251,169\ne:262,262\ne:263,263\ne:264,265\ne:264,266\ne:264,267\ne:106,268\ne:269,45\ne:129,270\ne:271,272\ne:81,256\ne:46,139\ne:46,15\ne:46,273\ne:46,272\ne:46,274\ne:46,164\ne:46,216\ne:46,45\ne:275,276\ne:277,277\ne:155,114\ne:158,62\ne:129,278\ne:101,101\ne:29,40\ne:279,107\ne:155,208\ne:231,280\ne:281,281\ne:282,283\ne:155,284\ne:46,46\ne:160,28\ne:160,23\ne:285,286\ne:285,211\ne:258,183\ne:69,287\ne:280,231\ne:212,249\ne:162,288\ne:162,71\ne:162,84\ne:280,289\ne:280,270\ne:280,196\ne:280,168\ne:280,167\ne:280,290\ne:280,203\ne:280,14\ne:280,291\ne:280,284\ne:280,129\ne:280,130\ne:280,292\ne:293,19\ne:254,226\ne:129,294\ne:189,106\ne:295,296\ne:165,115\ne:287,69\ne:287,80\ne:74,248\ne:74,297\ne:74,73\ne:298,299\ne:281,137"
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
  {:data "h:tree:layer:id\ne:circ:a:1,circ:b:1\ne:circ:a:1,circ:b:2\ne:circ:a:1,circ:b:3\ne:circ:a:1,circ:b:4\ne:circ:a:1,circ:b:5\ne:circ:b:1,circ:c:1\ne:circ:b:1,circ:c:2\ne:circ:b:1,circ:c:3\ne:circ:b:2,circ:c:4\ne:circ:b:2,circ:c:5\ne:circ:b:2,circ:c:6\ne:circ:b:3,circ:c:7\ne:circ:b:3,circ:c:8\ne:circ:b:3,circ:c:9\ne:circ:b:4,circ:c:10\ne:circ:b:4,circ:c:11\ne:circ:b:4,circ:c:12\ne:circ:b:5,circ:c:13\ne:circ:b:5,circ:c:14\ne:circ:b:5,circ:c:15\ne:circ:c:1,circ:d:1\ne:circ:c:1,circ:d:2\ne:circ:c:1,circ:d:3\ne:circ:c:1,circ:d:4\ne:circ:c:1,circ:d:5\ne:circ:c:2,circ:d:6\ne:circ:c:2,circ:d:7\ne:circ:c:2,circ:d:8\ne:circ:c:2,circ:d:9\ne:circ:c:2,circ:d:10\ne:circ:c:3,circ:d:11\ne:circ:c:3,circ:d:12\ne:circ:c:3,circ:d:13\ne:circ:c:3,circ:d:14\ne:circ:c:3,circ:d:15\ne:circ:c:4,circ:d:16\ne:circ:c:4,circ:d:17\ne:circ:c:4,circ:d:18\ne:circ:c:4,circ:d:19\ne:circ:c:4,circ:d:20\ne:circ:c:5,circ:d:21\ne:circ:c:5,circ:d:22\ne:circ:c:5,circ:d:23\ne:circ:c:5,circ:d:24\ne:circ:c:5,circ:d:25\ne:circ:c:6,circ:d:26\ne:circ:c:6,circ:d:27\ne:circ:c:6,circ:d:28\ne:circ:c:6,circ:d:29\ne:circ:c:6,circ:d:30\ne:circ:c:7,circ:d:31\ne:circ:c:7,circ:d:32\ne:circ:c:7,circ:d:33\ne:circ:c:7,circ:d:34\ne:circ:c:7,circ:d:35\ne:circ:c:8,circ:d:36\ne:circ:c:8,circ:d:37\ne:circ:c:8,circ:d:38\ne:circ:c:8,circ:d:39\ne:circ:c:8,circ:d:40\ne:circ:c:9,circ:d:41\ne:circ:c:9,circ:d:42\ne:circ:c:9,circ:d:43\ne:circ:c:9,circ:d:44\ne:circ:c:9,circ:d:45\ne:circ:c:10,circ:d:46\ne:circ:c:10,circ:d:47\ne:circ:c:10,circ:d:48\ne:circ:c:10,circ:d:49\ne:circ:c:10,circ:d:50\ne:circ:c:11,circ:d:51\ne:circ:c:11,circ:d:52\ne:circ:c:11,circ:d:53\ne:circ:c:11,circ:d:54\ne:circ:c:11,circ:d:55\ne:circ:c:12,circ:d:56\ne:circ:c:12,circ:d:57\ne:circ:c:12,circ:d:58\ne:circ:c:12,circ:d:59\ne:circ:c:12,circ:d:60\ne:circ:c:13,circ:d:61\ne:circ:c:13,circ:d:62\ne:circ:c:13,circ:d:63\ne:circ:c:13,circ:d:64\ne:circ:c:13,circ:d:65\ne:circ:c:14,circ:d:66\ne:circ:c:14,circ:d:67\ne:circ:c:14,circ:d:68\ne:circ:c:14,circ:d:69\ne:circ:c:14,circ:d:70\ne:circ:c:15,circ:d:71\ne:circ:c:15,circ:d:72\ne:circ:c:15,circ:d:73\ne:circ:c:15,circ:d:74\ne:circ:c:15,circ:d:75"
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


;; -----------------
;; Friendship nested clusters

(defn ^:export example6 []
  {:data "h:animal:name:link
e:pandas:simone:https://www.mpaa.org/the-credits/,pandas:max:
e:pandas:sharhar:,pandas:summer:
e:pandas:nikkai:|fillcolor:gold4:shape:triangle,pandas:isobel:
e:pandas:malakai:,pandas:delila:
e:pandas:cristo-+lene:,pandas:sharhar:
e:pandas:kacey:,pandas:sharhar:|shape:rect:fillcolor:blue:fontcolor:white
e:pandas:malakai:,pandas:ivy:
e:pandas:max:,pandas:Bridget:|fillcolor:aquamarine:fontcolor:black,|color:blue
e:pandas:ivy:,squirrels:huxley:,|color:red
e:pandas:kacey:,brownbears:cosmo:,|color:deeppink
e:brownbears:cosmo:|shape:septagon:style:filled,brownbears:eliza:,|color:deeppink
e:pandas:simone:https://www.mpaa.org/the-credits/,pandas:ivy:,|color:green2
e:pandas:simone:https://www.mpaa.org/the-credits/,pandas:summer:,|color:green2
e:wolves:leo:,wolves:sebas-+tian:
e:wolves:leo:,wolves:angel-+ique:
e:pandas:summer:,wolves:leo:
e:flora:daisy:|fillcolor:gold:shape:box,flora:rose:,|splines:none:arrowhead:obox
e:flora:rose:|fillcolor:gold:shape:box,flora:lily:,|style:invis
e:flora:lily:|fillcolor:gold:shape:box,flora:jasmine:,|splines:none:arrowhead:invodot:arrowsize:1.3
e:flora:jasmine:|fillcolor:gold:shape:box,flora:fleur:,|style:invis
e:flora:fleur:|fillcolor:gold:shape:box,flora:alyssa:|fillcolor:gold:shape:box,|fillcolor:palegoldenrod:style:dashed:color:goldenrod2
e:flora:fleur:,flora:aster:|fillcolor:gold:shape:star,|fillcolor:gray:style:dotted
e:wolves:angel-+ique:,flora:lily:,|taillabel:<<table cellpadding='1' border='1' cellborder='0' bgcolor='#c731ed' color='magenta' style='rounded'><tr><td><font point-size='9'>1.</font></td></tr></table>>:headlabel:<<table cellpadding='1' border='1' cellborder='0' bgcolor='#c731ed' color='magenta' style='rounded'><tr><td><font point-size='9'>1.</font></td></tr></table>>:labeldistance:0.5:labelangle:0:color:#c731ed00:style:dotted:constraint:false
cs:pandas|bgcolor:cornsilk1:fontcolor:black
cs:brownbears|bgcolor:palegreen:color:limegreen:margin:20
cs:squirrels|bgcolor:pink:margin:15:style:rounded
cs:bears|bgcolor:bisque3:margin:15:style:rounded:fontcolor:chocolate4
cs:carnivores|bgcolor:ivory3:margin:15:style:rounded:fontcolor:maroon1
cs:animals|bgcolor:lightskyblue1
cs:rodents|bgcolor:indianred2
cs:wolves|bgcolor:gray64:style:rounded:fontcolor:white
cs:flora|bgcolor:palegreen:style:rounded:fontcolor:seagreen
cs:plantae|bgcolor:palegreen2:style:rounded
cp:pandas:bears:brownbears:bears:bears:carnivores:carnivores:animals
cp:squirrels:rodents:wolves:carnivores:rodents:animals:flora:plantae
ce:animals:rodents:pandas:wolves"
   :options
   (merge default-options
          {:layout "dot"
           :label "name"
           :shape "ellipse"
           :splines "ortho"
           :cluster-on "animal"
           :rankdir "TB"
           })})


(defn ^:export example7 []
  {:data "h:animal:name\ne:pandas:simone,pandas:max\ne:pandas:sharhar,pandas:summer\ne:pandas:nikkai|fillcolor:gold4:shape:triangle,pandas:isobel\ne:pandas:malakai,pandas:delila\ne:pandas:cristo-+lene,pandas:sharhar\ne:pandas:kacey,pandas:sharhar|shape:rect:fillcolor:blue:fontcolor:white\ne:pandas:malakai,pandas:ivy\ne:pandas:max,pandas:Bridget|fillcolor:aquamarine:fontcolor:black,|color:blue\ne:pandas:ivy,squirrels:huxley,|color:red\ne:pandas:kacey,brownbears:cosmo,|color:deeppink\ne:brownbears:cosmo|shape:septagon:style:filled,brownbears:eliza,|color:deeppink\ne:pandas:simone,pandas:ivy,|color:green2\ne:pandas:simone,pandas:summer,|color:green2\ne:wolves:leo,wolves:sebas-+tian\ne:wolves:leo,wolves:angel-+ique\ne:wolves:leo,carnivores:polaris\ne:carnivores:polaris,carnivores:penguiny\ne:brownbears:eliza,carnivores:polaris\ne:pandas:summer,wolves:leo\ne:flora:daisy|fillcolor:gold:shape:box,flora:rose,|splines:none:arrowhead:obox\ne:flora:rose|fillcolor:gold:shape:box,flora:lily,|style:invis\ne:flora:lily|fillcolor:gold:shape:box,flora:jasmine,|splines:none:arrowhead:invodot:arrowsize:1.3\ne:flora:jasmine|fillcolor:gold:shape:box,flora:fleur,|style:invis\ne:flora:fleur|fillcolor:gold:shape:box,flora:alyssa|fillcolor:gold:shape:box,|fillcolor:palegoldenrod:style:dashed:color:goldenrod2\ne:flora:fleur,flora:aster|fillcolor:gold:shape:star,|fillcolor:gray:style:dotted\ne:wolves:angel-+ique,flora:lily,|taillabel:<<table cellpadding='1' border='1' cellborder='0' bgcolor='#c731ed' color='magenta' style='rounded'><tr><td><font point-size='9'>1.</font></td></tr></table>>:headlabel:<<table cellpadding='1' border='1' cellborder='0' bgcolor='#c731ed' color='magenta' style='rounded'><tr><td><font point-size='9'>1.</font></td></tr></table>>:labeldistance:0.5:labelangle:0:color:#c731ed00:style:dotted:constraint:false\ncs:pandas|bgcolor:cornsilk1:fontcolor:black\ncs:brownbears|bgcolor:palegreen:color:limegreen:margin:20\ncs:squirrels|bgcolor:pink:margin:15:style:rounded\ncs:bears|bgcolor:bisque3:margin:15:style:rounded:fontcolor:chocolate4\ncs:carnivores|bgcolor:ivory3:margin:15:style:rounded:fontcolor:maroon1\ncs:animals|bgcolor:lightskyblue1\ncs:rodents|bgcolor:indianred2\ncs:wolves|bgcolor:gray64:style:rounded:fontcolor:white\ncs:flora|bgcolor:palegreen:style:rounded:fontcolor:seagreen\ncs:plantae|bgcolor:palegreen2:style:rounded\ncp:pandas:bears:brownbears:bears:bears:carnivores:carnivores:animals\ncp:squirrels:rodents:wolves:carnivores:rodents:animals:flora:plantae\nce:animals:rodents:pandas:wolves"
   :options
   (merge default-options
          {:layout "dot"
           :label "name"
           :shape "ellipse"
           :splines "ortho"
           :cluster-on "animal"
           :rankdir "TB"
           })})

