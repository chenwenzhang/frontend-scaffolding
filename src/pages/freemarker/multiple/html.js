const template = require("../../../layouts/hbs-loader")("my.ftl");
module.exports = template({
    body: require("./html/body.ftl")
});