const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackBaseConfig = require("./webpack.base.conf");
const utils = require("./utils");
const config = require("../config");
const pages = require("./pages");

let webpackConfig = merge(webpackBaseConfig, {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});

pages.forEach(page => {
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
        filename: `${page}.${config.build.viewExt}`,
        template: utils.htmlPath(page),
        chunks: [page],
        inject: true
    }));
});

module.exports = webpackConfig;