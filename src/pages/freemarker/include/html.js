const template = require("../../../layouts/hbs-loader")("include.ftl");
module.exports = template({
    content: require("./html/content.ftl")
});