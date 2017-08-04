const template = require("../../../layouts/hbs-loader")("base.html");
module.exports = template({
    body: require("./html/body.html")
});