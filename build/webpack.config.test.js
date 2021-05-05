const Path = require("path");
const WebpackMerge = require("webpack-merge");
const WebpackConfig = require("./webpack.config.base.js");

const { resolve } = Path;

module.exports = WebpackMerge(WebpackConfig, {
    mode: "production",
    devtool: "source-map",
    entry: {
        app: resolve(__dirname, "../src/main")
    }
});
