const Handlebars = require("handlebars");
const config = require("../../config");
let caches = {};
module.exports = function(name){
    if (caches[name] === undefined) {
        caches[name] = Handlebars.compile(require(`./${name}.${config.build.viewExt}`));
    }
    return caches[name];
};