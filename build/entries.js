const utils = require("./utils");
const routes = require("./routes");
const pages = require("./pages");

module.exports = pages.reduce((es, page) => {
    es[page] = utils.entryPath(page);
    return es;
}, {});