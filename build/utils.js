const routes = require("./routes");
const config = require("../config");

exports.entryPath = function(page){
    return `${routes.srcSub.pages}/${page}/entry.js`;
};

exports.htmlPath = function(page){
    return `${routes.srcSub.pages}/${page}/html.js`;
};

exports.devViewFile = function(page){
    return `${routes.dist}/${page}.${config.build.viewExt}`;
};