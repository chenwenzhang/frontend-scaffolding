const template = require("../../../layouts/loader")("base");
module.exports = template({
    body: require("./html/body.ftl")
});