module.exports = {
    host: "localhost",
    protocol: "http",
    port: 8000,
    autoOpenBrowser: true,
    assetsSubDirectory: "",
    assetsPublicPath: "",
    proxyTable: {
        "/api": {
            target: "http://www.baidu.com",
            pathRewrite: {
                "^/api": "/"
            },
            changeOrigin: true
        }
    },
};
