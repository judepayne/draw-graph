 CodeMirror.defineMode("drawgraph", function() {
    
    return {
        token: function(stream,state) {
            
            if (stream.sol() && stream.match(";") ) {
            	  stream.skipToEnd();
                return "style1";
                
            } else if (stream.sol() && stream.match(/999/)) {
            	  stream.skipToEnd();
                return "style2";
                
            } else if (stream.sol() && stream.match(/h,|e,|cs,|ce,|cp/) ) {
                return "style3";
                
            } else if (stream.match(/\|/) ) {
            		stream.eatWhile(/(?!,)./)
                return "style2";
                
            } else {
                stream.next();
                return null;
            }
        }
    };
    
});
