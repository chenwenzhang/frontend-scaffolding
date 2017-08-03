const utils = require("./utils");
const pages = require("./pages");

module.exports = pages.reduce((es, page) => {
    es[page] = utils.entryPath(page);
    return es;
}, {});