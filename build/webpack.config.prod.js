const Webpack = require("webpack");
const Path = require("path");
const WebpackMerge = require("webpack-merge");
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const WebpackConfig = require("./webpack.config.base.js");

const smp = new SpeedMeasureWebpackPlugin();

const { resolve } = Path;

module.exports = smp.wrap(WebpackMerge(WebpackConfig, {
    mode: "production",
    devtool: "hidden-source-map",
    entry: {
        app: resolve(__dirname, "../src/main")
    },
    plugins: [
        new Webpack.DllReferencePlugin({
            manifest: require("../library/library.json")
        }),
        new HardSourceWebpackPlugin()
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                cache: true
            })
        ]
    }
}));
