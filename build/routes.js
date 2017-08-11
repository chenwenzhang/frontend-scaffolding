const path = require("path");

let routes = {};

routes.root = path.dirname(__dirname);
routes.build = __dirname;
routes.config = `${routes.root}/config`;
routes.src = `${routes.root}/src`;
routes.dist = `${routes.root}/dist`;

routes.srcSub = {};
routes.srcSub.pages = `${routes.src}/pages`;
routes.srcSub.resources = `${routes.src}/resources`;
routes.srcSub.layouts = `${routes.src}/layouts`;
routes.srcSub.mocks = `${routes.src}/mocks`;

routes.distSub = {};
routes.distSub.views = `${routes.dist}/views`;
routes.distSub.resources = `${routes.dist}/resources`;

module.exports = routes;