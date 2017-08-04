const Handlebars = require("handlebars");
let caches = {};
module.exports = function(filename){
    if (caches[filename] === undefined) {
        caches[filename] = Handlebars.compile(require(`./${filename}`));
    }
    return caches[filename];
};