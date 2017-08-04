const template = require("../../../layouts/hbs-loader")("base.vm");
module.exports = template({
    body: require("./html/body.vm")
});