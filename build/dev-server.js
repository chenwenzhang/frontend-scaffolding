const fs = require("fs");
const express = require("express");
const opn = require("opn");
const webpack = require("webpack");

const config = require("../config");
const routes = require("./routes");
const webpackConfig = require("./webpack.dev.conf");
const compileHandle = require(`./compile-handle-${config.dev.compileHandle}`);
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

compileHandle(app, compiler, devMiddleware, hotMiddleware);

app.use(require("connect-history-api-fallback")());
app.use(devMiddleware);
app.use(hotMiddleware);
app.use(`/${config.build.resourcesDirectory}`, express.static(routes.distSub.resources));

compiler.plugin("compilation", function (compilation) {
    compilation.plugin("html-webpack-plugin-after-emit", (data, callback) => {
        webpackHotMiddleware.publish({
            action: "reload",
        });
        callback();
    });
});

console.log('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n');
    opn(uri);
});

const server = app.listen(config.dev.port);
module.exports = {
    close: () => {
        server.close();
    },
};