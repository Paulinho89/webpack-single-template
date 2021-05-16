const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        library: [
            "vue",
            "vue-router"
        ]
    },
    output: {
        filename: "[name]_[hash].dll.js",
        path: path.join(__dirname, "../library"),
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            name: "[name]_[hash]",
            path: path.join(__dirname, "../library/[name].json")
        })
    ]
};
