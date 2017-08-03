const webpack = require("webpack");
const rm = require("rimraf");
const routes = require("./routes");
const webpackConfig = require("./webpack.prod.conf");

rm(routes.distSub.resources, err => {
    if (err) {
        throw err;
    }
    rm(routes.distSub.views, err => {
        if (err) {
            throw err;
        }
        webpack(webpackConfig, (err, stats) => {
            if (err) {
                throw err;
            }
            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + "\n\n");
        });
    });
});