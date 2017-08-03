const routes = require("./routes");

exports.entryPath = function(page){
    return `${routes.srcSub.pages}/${page}/entry.js`;
};

exports.htmlPath = function(page){
    return `${routes.srcSub.pages}/${page}/html.js`;
};