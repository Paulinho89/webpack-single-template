const Path = require("path");
const BasePlugins = require("./plugins");

const { resolve } = Path;

module.exports = {
    output: {
        filename: "js/[name]-[hash:6].js",
        chunkFilename: "js/[name]-[chunkhash:6].js",
        path: resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [
                                require("autoprefixer")({
                                    overrideBrowserslist: ["last 2 version", ">1%", "ios 7"]
                                })
                            ]
                        }
                    },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [
                                require("autoprefixer")({
                                    overrideBrowserslist: ["last 2 version", ">1%", "ios 7"]
                                })
                            ]
                        }
                    },
                ]
            },
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loaders: "url-loader",
                exclude: /node_modules/,
                options: {
                    limit: 8192,
                    outputPath: "img/",
                    name: "[name]-[hash:6].[ext]"
                }
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "fonts/",
                            name: "[name].[ext]"
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        ...BasePlugins
    ],
    resolve: {
        extensions: [".js", ".json", ".css", ".less", ".vue"],
        alias: {
            vue$: "vue/dist/vue.common.js",
            "@": resolve(__dirname, "../src")
        }
    }
};
