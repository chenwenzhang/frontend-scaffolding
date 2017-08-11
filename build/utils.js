const fs = require("fs");
const merge = require("webpack-merge");
const routes = require("./routes");
const config = require("../config");

const requireJsonFile = file => {
    return JSON.parse(fs.readFileSync(file));
};

exports.entryPath = function(page){
    return `${routes.srcSub.pages}/${page}/entry.js`;
};

exports.htmlPath = function(page){
    return `${routes.srcSub.pages}/${page}/html.js`;
};

exports.devViewFile = function(page){
    return `${routes.dist}/${page}.${config.build.viewExt}`;
};

exports.devPageData = (page, files) => {
    return files.reduce((data, file) => {
        file = `${routes.srcSub.pages}/${page}/${file}`;
        if (fs.existsSync(file)) {
            data = merge(data, requireJsonFile(file));
        }
        return data;
    }, {});
};

exports.requireJsonFile = requireJsonFile;