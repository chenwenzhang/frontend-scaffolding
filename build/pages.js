const path = require("path");
const glob = require("glob");
const routes = require("./routes");
module.exports = glob.sync(`${routes.srcSub.pages}/**/entry.js`).reduce((pages, file) => {
    pages.push(path.dirname(file).replace(`${routes.srcSub.pages}/`, ""));
    return pages;
}, []);