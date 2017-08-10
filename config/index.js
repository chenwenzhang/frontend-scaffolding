const path = require("path");

module.exports = {
    build: {
        publicPath: "/",
        resourcesDirectory: "resources",
        commonChunkName: "vendors",
        minCommonChunks: 2,
        provides: {
            "$": "jquery",
            "jQuery": "jquery",
            "window.$": "jquery",
            "window.jQuery": "jquery",
        },
        pageConfig: {
            engine: "html",
            ext: "html",
            route: "",
            data: [],
        },
    },
    dev: {
        port: 8000,
        autoOpenBrowser: true,
        openRoute: "/freemarker/index"
    },
};