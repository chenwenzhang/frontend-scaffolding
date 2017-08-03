const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

const webpackBaseConfig = require("./webpack.base.conf");
const utils = require("./utils");
const config = require("../config");
const routes = require("./routes");
const pages = require("./pages");

let webpackConfig = merge(webpackBaseConfig, {
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: config.build.commonChunkName,
            minChunks: config.build.minCommonChunks,
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true,
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            sourceMap: true,
        }),
    ],
});

pages.forEach(page => {
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
        filename: `${routes.distSub.views}/${page}.${config.build.viewExt}`,
        template: utils.htmlPath(page),
        chunks: [config.build.commonChunkName, page],
        inject: true,
    }));
});

module.exports = webpackConfig;