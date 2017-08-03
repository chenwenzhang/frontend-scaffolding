const template = require("../../../layouts/loader")("includeLayout");
module.exports = template({
    content: require("./html/content.ftl")
});