const template = require("../../../layouts/loader")("myLayout");
module.exports = template({
    content: require("./html/content.ftl")
});