const Path = require("path");
const glob = require("glob");
const HappyPack = require("happypack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const BasePlugins = require("./plugins");

const { resolve } = Path;

const PATHS = {
    src: Path.join(__dirname, "src")
};

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
                    MiniCssExtractPlugin.loader,
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
                    MiniCssExtractPlugin.loader,
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
                use: [
                    {
                        loader: "thread-loader",
                        options: {
                            workers: 3
                        }
                    },
                    "babel-loader",
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            outputPath: "img/",
                            name: "[name]-[hash:6].[ext]"
                        }
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                          mozjpeg: {
                            progressive: true,
                            quality: 65
                          },
                          // optipng.enabled: false will disable optipng
                          optipng: {
                            enabled: false,
                          },
                          pngquant: {
                            quality: "65-90",
                            speed: 4
                          },
                          gifsicle: {
                            interlaced: false,
                          },
                          // the webp option will enable WEBP
                          webp: {
                            quality: 75
                          }
                        }
                    }
                ]
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
        ...BasePlugins,
        new HappyPack({
            // id 标识符，要和 rules 中指定的 id 对应起来
            id: "babel",
            // 需要使用的 loader，用法和 rules 中 Loader 配置一样
            // 可以直接是字符串，也可以是对象形式
            loaders: ["babel-loader?cacheDirectory=true"]
        }),
        new MiniCssExtractPlugin({
            filename: "[name]_[contenthash:8].css"
        }),
        // 开启css的tree-shaking
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
        })
    ],
    resolve: {
        extensions: [".js", ".json", ".css", ".less", ".vue"],
        alias: {
            vue$: "vue/dist/vue.common.js",
            "@": resolve(__dirname, "../src")
        }
    }
};
