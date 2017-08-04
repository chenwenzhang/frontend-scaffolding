const fs = require("fs");
const merge = require("webpack-merge");
const config = require("../config");
const pages = require("./pages");
const routes = require("./routes");

module.exports = pages.reduce((configs, page) => {
    let configFile = `${routes.srcSub.pages}/${page}/config.json`;
    configs[page] = merge({}, config.build.pageConfig);
    if (fs.existsSync(configFile)) {
        configs[page] = merge(configs[page], require(configFile));
    }
    return configs;
}, {});