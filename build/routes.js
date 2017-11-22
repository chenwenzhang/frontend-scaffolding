const path = require("path");
const config = require("../config");

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
routes.distSub.views = config.build.distDirectoryName.view.length == 0 ? routes.dist : `${routes.dist}/${config.build.distDirectoryName.view}`;
routes.distSub.resources = config.build.distDirectoryName.resource.length == 0 ? routes.dist : `${routes.dist}/${config.build.distDirectoryName.resource}`;

module.exports = routes;