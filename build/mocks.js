const path = require("path");
const glob = require("glob");
const routes = require("./routes");
const utils = require("./utils");
module.exports = glob.sync(`${routes.srcSub.mocks}/**/config.json`).reduce((mocks, file) => {
    let config = require(file);
    let method = config.method;
    let route = config.route;
    mocks[method][route] = {
        type: config.type,
        file: path.dirname(file) + "/index." + config.type,
        inject: config.inject
    };
    return mocks;
}, {
    post: {},
    get: {},
    handler: (config, req) => {
        if (config.type === "json") {
            return utils.requireJsonFile(config.file);
        } else {
            let exec = require(config.file);
            return config.inject ? exec(req) : exec();
        }
    },
});