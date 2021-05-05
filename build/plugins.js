const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Path = require("path");

const { resolve } = Path;

const PluginConfig = [
    new HtmlWebpackPlugin({
        filename: "../dist/index.html",
        template: resolve(__dirname, "../index.html")
    }),
    new VueLoaderPlugin()
];

module.exports = PluginConfig;
