const fs = require("fs");
const merge = require("webpack-merge");
const config = require("../config");
const pages = require("./pages");
const routes = require("./routes");

module.exports = pages.reduce((cs, page) => {
    let configFile = `${routes.srcSub.pages}/${page}/config.json`;
    cs[page] = merge({}, config.build.pageConfig);
    if (fs.existsSync(configFile)) {
        cs[page] = merge(cs[page], require(configFile));
    }
    return cs;
}, {});