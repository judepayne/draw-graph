importScripts("viz.js");

var viz = {
    vizsvg: function (dot) {
        return Viz(dot, {format: "svg"});
    }
};

module.exports = viz;
