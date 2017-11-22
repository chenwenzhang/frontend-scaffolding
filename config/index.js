const path = require("path");

module.exports = {
    build: {
        publicPath: "/",
        resourcesDirectory: "resources",
        commonChunkName: "vendors",
        minCommonChunks: 2,
        // 全局模块配置
        provides: {
            "$": "jquery",
            "jQuery": "jquery",
            "window.$": "jquery",
            "window.jQuery": "jquery",
        },
        // 页面配置
        pageConfig: {
            // 模板引擎
            engine: "html",
            // 模板后缀
            ext: "html",
            // 页面访问路由 - dev环境使用
            route: "",
            // 页面需要注入的数据 - 适用于前后端结合的开发模式，后端向模板注入数据
            data: [],
        },
        //
        distDirectoryName: {
            view: "views",
            resource: "resources"
        },
    },
    dev: {
        // dev服务开启端口
        port: 8000,
        // 是否自动打开浏览器
        autoOpenBrowser: true,
        // 开启浏览器后，默认访问路由
        openRoute: "/freemarker/index",
        // 模拟服务配置模板 - 没有实际用途，仅供参考
        //   - 没有特殊注明的配置项均为必须配置
        mockConfig: {
            // get or post
            method: "post",
            // 服务路由
            route: "/passport/login",
            // 服务文件类型，js | json
            //   - 文件名统一为：index.js or index.json
            //   - js通过require方式引入，json通过fs、JSON.parse读取并解析数据[防止json数据缓存]
            type: "js",
            // 是否注入request对象
            inject: true
        },
    },
};