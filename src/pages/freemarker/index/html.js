const template = require("../../../layouts/hbs-loader")("base.ftl");
module.exports = template({
    body: require("./html/body.ftl")
});