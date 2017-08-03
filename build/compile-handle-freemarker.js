const utils = require("./utils");
const pages = require("./pages");

module.exports = function(app, compiler, devMiddleware, hotMiddleware){
    pages.forEach(page => {
        console.log(`/${page}`);
        app.get("/" + page, (req, res) => {
            devMiddleware.fileSystem.readFile(utils.devViewFile(page), (err, data) => {
                res.setHeader("Content-Type", "text/html;charset=UTF-8");
                res.setHeader("Content-Length", data.length);
                res.send(data);
            });
        });
    });
};