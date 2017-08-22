const webpack = require("webpack");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

const config = require("../config");
const routes = require("./routes");
const entries = require("./entries");

module.exports = {
    entry: entries,
    output: {
        path: routes.dist,
        publicPath: config.build.publicPath,
        filename: `${config.build.resourcesDirectory}/js/[name].[hash].js`,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"],
                }),
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    name: `${config.build.resourcesDirectory}/images/[name].[hash].[ext]`,
                    limit: 8192,
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    name: `${config.build.resourcesDirectory}/fonts/[name].[hash].[ext]`,
                    limit: 8192,
                },
            },
            {
                test: /\.(html|ftl|vm)$/,
                loader: "html-withimg-loader?min=false",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"],
                },
            },
        ],
    },
    plugins: [
        new ExtractTextWebpackPlugin(`${config.build.resourcesDirectory}/css/[name].[hash].css`),
        new webpack.ProvidePlugin(config.build.provides),
    ]
};