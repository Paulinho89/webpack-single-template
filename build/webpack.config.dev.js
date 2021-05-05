const WebpackConfig = require("./webpack.config.base.js");
const WebpackMerge = require("webpack-merge");
const Webpack = require("webpack");

const Path = require("path");

const { resolve } = Path;

module.exports = WebpackMerge(WebpackConfig, {
    mode: "development",
    entry: {
        app: ["webpack-hot-middleware/client", resolve(__dirname, "../src/main")]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ]
});
