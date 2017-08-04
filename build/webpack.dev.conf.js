const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackBaseConfig = require("./webpack.base.conf");
const utils = require("./utils");
const config = require("../config");
const pages = require("./pages");
const pageConfigs = require("./page.configs");

let webpackConfig = merge(webpackBaseConfig, {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});

pages.forEach(page => {
    let pageConfig = pageConfigs[page];
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
        filename: `${page}.${pageConfig.ext}`,
        template: utils.htmlPath(page),
        chunks: [page],
        inject: true
    }));
});

module.exports = webpackConfig;