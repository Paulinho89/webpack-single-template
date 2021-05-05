const opn = require("opn");
const Express = require("express");
const Webpack = require("webpack");
const ProxyMiddleware = require("http-proxy-middleware");
const DashboardPlugin = require("webpack-dashboard/plugin");
const WebpackDevMiddleware = require("webpack-dev-middleware");
const WebpackHotMiddleware = require("webpack-hot-middleware");
const HistoryApiFallback = require("connect-history-api-fallback");
const WebpackConfig = require("./webpack.config.dev");
const Config = require("./proxy");

// 端口
const port = process.env.PORT || Config.port;
// 是否需要自动打开页面
const autoOpenBrowser = !!Config.autoOpenBrowser;
// 代理配置
const { proxyTable } = Config;
// 开启express服务
const app = Express();
const compiler = Webpack(WebpackConfig);
// 编译
const devMiddleware = WebpackDevMiddleware(compiler, {
    stats: {
        colors: true,
        chunks: false
    }
});
// 热更新
const hotMiddleware = WebpackHotMiddleware(compiler, {
    log: () => {}
});
// 触发页面刷新
compiler.plugin("compilation", compilation => {
    compilation.plugin("html-webpack-plugin-after-emit", () => {
        hotMiddleware.publish({ action: "reload" });
    });
});
// 终端编译信息输出
compiler.apply(new DashboardPlugin());
// 代理
Object.keys(proxyTable).forEach(context => {
    let options = proxyTable[context];
    if (typeof options === "string") {
        options = { target: options };
    }
    app.use(ProxyMiddleware(options.filter || context, options));
});
// 设置允许跨域
app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
// 开启history路由模式
app.use(HistoryApiFallback());

app.use(devMiddleware);

app.use(hotMiddleware);

const uri = `${Config.protocol}://${Config.host}:${port}`;
// 打印启动日志
devMiddleware.waitUntilValid(() => {
    console.log(`> Listening at ${uri}\n`);
});
// 监听服务
app.listen(port, err => {
    if (err) {
        console.log(err);
        return;
    }
    // 自动打开页面
    if (autoOpenBrowser) {
        opn(uri);
    }
});
