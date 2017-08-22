const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const opn = require("opn");
const webpack = require("webpack");

const utils = require("./utils");
const config = require("../config");
const routes = require("./routes");
const mocks = require("./mocks");
const pages = require("./pages");
const pageConfigs = require("./page.configs");
const webpackConfig = require("./webpack.dev.conf");
const app = express();
const compiler = webpack(webpackConfig);
const uri = "http://localhost:" + config.dev.port;
const openUri = `${uri}${config.dev.openRoute}`;
const devMiddleware = require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
});
const hotMiddleware = require("webpack-hot-middleware")(compiler, {
    log: () => {},
    heartbeat: 2000,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

Object.keys(mocks).forEach(mockMethod => {
    if (mockMethod !== "handler") {
        Object.keys(mocks[mockMethod]).forEach(mockRoute => {
            app[mockMethod](mockRoute, (req, res) => {
                res.send(mocks.handler(mocks[mockMethod][mockRoute], req));
            });
        });
    }
});

pages.forEach(page => {
    let pageConfig = pageConfigs[page];
    let route = pageConfig.route.length === 0 ? `/${page}` : pageConfig.route;
    app.get(route, (req, res) => {
        let templateFile = `${routes.dist}/${page}.${pageConfig.ext}`;
        devMiddleware.fileSystem.readFile(templateFile, (err, data) => {
            let template = data.toString();
            let pageData = utils.devPageData(page, pageConfig.data);
            res.setHeader("Content-Type", "text/html;charset=UTF-8");
            res.setHeader("Content-Length", template.length);
            require(`./engine/${pageConfig.engine}`)(template, pageData, result => {
                res.send(result);
            });
        });
    });
});

app.use(require("connect-history-api-fallback")());
app.use(devMiddleware);
app.use(hotMiddleware);
app.use(`/${config.build.resourcesDirectory}`, express.static(routes.distSub.resources));

compiler.plugin("compilation", function (compilation) {
    compilation.plugin("html-webpack-plugin-after-emit", (data, callback) => {
        hotMiddleware.publish({
            action: "reload",
        });
        callback();
    });
});

console.log("> Starting dev server...");
devMiddleware.waitUntilValid(() => {
    console.log(`> Listening at ${uri}`);
    if (config.dev.autoOpenBrowser) {
        console.log(`> Open uri ${openUri}\n`);
        opn(openUri);
    }
});

const server = app.listen(config.dev.port);
module.exports = {
    close: () => {
        server.close();
    },
};