const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer");
const Path = require("path");

const { resolve } = Path;
const { ANALYZE } = process.env;
const { BundleAnalyzerPlugin } = WebpackBundleAnalyzer;

const PluginConfig = [
    new HtmlWebpackPlugin({
        filename: "../dist/index.html",
        template: resolve(__dirname, "../index.html")
    }),
    new VueLoaderPlugin()
];

if (ANALYZE === "true") {
    PluginConfig.push(new BundleAnalyzerPlugin());
}

module.exports = PluginConfig;
