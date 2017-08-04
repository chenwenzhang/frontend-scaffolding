const fs = require("fs");
const express = require("express");
const opn = require("opn");
const webpack = require("webpack");

const config = require("../config");
const routes = require("./routes");
const pages = require("./pages");
const pageConfigs = require("./page.configs");
const webpackConfig = require("./webpack.dev.conf");
const app = express();
const compiler = webpack(webpackConfig);
const uri = "http://localhost:" + config.dev.port;
const devMiddleware = require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
});
const hotMiddleware = require("webpack-hot-middleware")(compiler, {
    log: () => {},
    heartbeat: 2000,
});

pages.forEach(page => {
    let pageConfig = pageConfigs[page];
    let route = pageConfig.route.length == 0 ? `/${page}` : pageConfig.route;
    app.get(route, (req, res) => {
        let templateFile = `${routes.dist}/${page}.${pageConfig.ext}`;
        devMiddleware.fileSystem.readFile(templateFile, (err, data) => {
            res.setHeader("Content-Type", "text/html;charset=UTF-8");
            res.setHeader("Content-Length", data.length);
            res.send(data);
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
    console.log(`> Listening at ${uri}\n`);
    opn(uri);
});

const server = app.listen(config.dev.port);
module.exports = {
    close: () => {
        server.close();
    },
};