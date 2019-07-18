# draw-graph.core

The front end to draw graph

Please see the site as hosted at https://draw-graph.com

For usage instructions, please see the help page at the same.

### Passing the Front End data and options

It's possible to pass both data and options to the front end as a json map in the html parameter string.

For example, saying you have the following map of data and options:

    {\"options\":{\"constraint\":true,\"pp-font\":\"\",\"fixedsize\":\"true\",\"pp-cluster-sep\":\"\",\"num-cluster-edges\":\"4\",\"overlap\":\"false\",\"color-on\":\"\",\"layout\":\"dot\",\"show-roots?\":false,\"splines\":\"splines\",\"post-process?\":false,\"pp-anneal-bias\":\"3\",\"pp-clusters\":{\"y\":true,\"h\":true,\"x\":true,\"w\":true},\"concentrate\":false,\"show-constraints?\":false,\"fix-ranks?\":true,\"label\":\"name\",\"elide\":\"0\",\"shape\":\"ellipse\",\"url\":\"\",\"cluster-on\":\"animal\",\"rankdir\":\"TB\",\"tooltip\":\"\"},\"data\":\"h,animal:name\\ne,pandas:simone,pandas:max\\ne,pandas:shahar,pandas:summer\\ne,pandas:nikkai,pandas:isobel\\ne,pandas:malakai,pandas:delila\\ne,pandas:cristolene,pandas:shahar,relationship:friend|color:deeppink\\ne,pandas:kacey,pandas:shahar|shape:rect:fillcolor:blue:fontcolor:white,relationship:friend\\ne,pandas:malakai,pandas:ivy\\ne,pandas:max,pandas:Bridget,|color:blue\\ne,pandas:ivy,squirrels:huxley,|color:red\\ne,pandas:kacey,brownbears:cosmo,|color:deeppink\\ne,brownbears:cosmo|shape:septagon:style:filled,brownbears:eliza,|color:deeppink\\ne,pandas:simone,pandas:ivy,|color:green2\\ne,pandas:simone,pandas:summer,|color:green2\\ncs,pandas|bgcolor:cornsilk1:style:rounded\\ncs,brownbears|bgcolor:palegreen:color:limegreen:margin:20\\ncs,squirrels|bgcolor:pink:style:rounded:margin:15\"}
    
(which is the same as the first drop-down example at https://draw-graph.com)

that should be *url encoded* to:

    %7B%22options%22%3A%7B%22constraint%22%3Atrue%2C%22pp-font%22%3A%22%22%2C%22fixedsize%22%3A%22true%22%2C%22pp-cluster-sep%22%3A%22%22%2C%22num-cluster-edges%22%3A%224%22%2C%22overlap%22%3A%22false%22%2C%22color-on%22%3A%22%22%2C%22layout%22%3A%22dot%22%2C%22show-roots%3F%22%3Afalse%2C%22splines%22%3A%22splines%22%2C%22post-process%3F%22%3Afalse%2C%22pp-anneal-bias%22%3A%223%22%2C%22pp-clusters%22%3A%7B%22y%22%3Atrue%2C%22h%22%3Atrue%2C%22x%22%3Atrue%2C%22w%22%3Atrue%7D%2C%22concentrate%22%3Afalse%2C%22show-constraints%3F%22%3Afalse%2C%22fix-ranks%3F%22%3Atrue%2C%22label%22%3A%22name%22%2C%22elide%22%3A%220%22%2C%22shape%22%3A%22ellipse%22%2C%22url%22%3A%22%22%2C%22cluster-on%22%3A%22animal%22%2C%22rankdir%22%3A%22TB%22%2C%22tooltip%22%3A%22%22%7D%2C%22data%22%3A%22h%2Canimal%3Aname%5Cne%2Cpandas%3Asimone%2Cpandas%3Amax%5Cne%2Cpandas%3Ashahar%2Cpandas%3Asummer%5Cne%2Cpandas%3Anikkai%2Cpandas%3Aisobel%5Cne%2Cpandas%3Amalakai%2Cpandas%3Adelila%5Cne%2Cpandas%3Acristolene%2Cpandas%3Ashahar%2Crelationship%3Afriend%7Ccolor%3Adeeppink%5Cne%2Cpandas%3Akacey%2Cpandas%3Ashahar%7Cshape%3Arect%3Afillcolor%3Ablue%3Afontcolor%3Awhite%2Crelationship%3Afriend%5Cne%2Cpandas%3Amalakai%2Cpandas%3Aivy%5Cne%2Cpandas%3Amax%2Cpandas%3ABridget%2C%7Ccolor%3Ablue%5Cne%2Cpandas%3Aivy%2Csquirrels%3Ahuxley%2C%7Ccolor%3Ared%5Cne%2Cpandas%3Akacey%2Cbrownbears%3Acosmo%2C%7Ccolor%3Adeeppink%5Cne%2Cbrownbears%3Acosmo%7Cshape%3Aseptagon%3Astyle%3Afilled%2Cbrownbears%3Aeliza%2C%7Ccolor%3Adeeppink%5Cne%2Cpandas%3Asimone%2Cpandas%3Aivy%2C%7Ccolor%3Agreen2%5Cne%2Cpandas%3Asimone%2Cpandas%3Asummer%2C%7Ccolor%3Agreen2%5Cncs%2Cpandas%7Cbgcolor%3Acornsilk1%3Astyle%3Arounded%5Cncs%2Cbrownbears%7Cbgcolor%3Apalegreen%3Acolor%3Alimegreen%3Amargin%3A20%5Cncs%2Csquirrels%7Cbgcolor%3Apink%3Astyle%3Arounded%3Amargin%3A15%22%7D
    
This string can then be appended to the url as follows:

https://draw-graph.com?%7B%22options%22%3A%7B%22constraint%22%3Atrue%2C%22pp-font%22%3A%22%22%2C%22fixedsize%22%3A%22true%22%2C%22pp-cluster-sep%22%3A%22%22%2C%22num-cluster-edges%22%3A%224%22%2C%22overlap%22%3A%22false%22%2C%22color-on%22%3A%22%22%2C%22layout%22%3A%22dot%22%2C%22show-roots%3F%22%3Afalse%2C%22splines%22%3A%22splines%22%2C%22post-process%3F%22%3Afalse%2C%22pp-anneal-bias%22%3A%223%22%2C%22pp-clusters%22%3A%7B%22y%22%3Atrue%2C%22h%22%3Atrue%2C%22x%22%3Atrue%2C%22w%22%3Atrue%7D%2C%22concentrate%22%3Afalse%2C%22show-constraints%3F%22%3Afalse%2C%22fix-ranks%3F%22%3Atrue%2C%22label%22%3A%22name%22%2C%22elide%22%3A%220%22%2C%22shape%22%3A%22ellipse%22%2C%22url%22%3A%22%22%2C%22cluster-on%22%3A%22animal%22%2C%22rankdir%22%3A%22TB%22%2C%22tooltip%22%3A%22%22%7D%2C%22data%22%3A%22h%2Canimal%3Aname%5Cne%2Cpandas%3Asimone%2Cpandas%3Amax%5Cne%2Cpandas%3Ashahar%2Cpandas%3Asummer%5Cne%2Cpandas%3Anikkai%2Cpandas%3Aisobel%5Cne%2Cpandas%3Amalakai%2Cpandas%3Adelila%5Cne%2Cpandas%3Acristolene%2Cpandas%3Ashahar%2Crelationship%3Afriend%7Ccolor%3Adeeppink%5Cne%2Cpandas%3Akacey%2Cpandas%3Ashahar%7Cshape%3Arect%3Afillcolor%3Ablue%3Afontcolor%3Awhite%2Crelationship%3Afriend%5Cne%2Cpandas%3Amalakai%2Cpandas%3Aivy%5Cne%2Cpandas%3Amax%2Cpandas%3ABridget%2C%7Ccolor%3Ablue%5Cne%2Cpandas%3Aivy%2Csquirrels%3Ahuxley%2C%7Ccolor%3Ared%5Cne%2Cpandas%3Akacey%2Cbrownbears%3Acosmo%2C%7Ccolor%3Adeeppink%5Cne%2Cbrownbears%3Acosmo%7Cshape%3Aseptagon%3Astyle%3Afilled%2Cbrownbears%3Aeliza%2C%7Ccolor%3Adeeppink%5Cne%2Cpandas%3Asimone%2Cpandas%3Aivy%2C%7Ccolor%3Agreen2%5Cne%2Cpandas%3Asimone%2Cpandas%3Asummer%2C%7Ccolor%3Agreen2%5Cncs%2Cpandas%7Cbgcolor%3Acornsilk1%3Astyle%3Arounded%5Cncs%2Cbrownbears%7Cbgcolor%3Apalegreen%3Acolor%3Alimegreen%3Amargin%3A20%5Cncs%2Csquirrels%7Cbgcolor%3Apink%3Astyle%3Arounded%3Amargin%3A15%22%7D

(url-?-encoded-json-map)

The site will open with the data and options loaded, just ready for you to click!

The options correspond to the options in the front-end (please see https://draw-graph.com) and there's a full description of them in the cmd-draw-graph folder.

## License

GNU GPL 3.0
