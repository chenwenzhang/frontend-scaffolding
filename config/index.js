const path = require("path");

module.exports = {
    build: {
        publicPath: "/",
        resourcesDirectory: "resources",
        viewExt: "ftl",
        commonChunkName: "vendors",
        minCommonChunks: 2,
    },
    dev: {
        port: 8000,
    },
};