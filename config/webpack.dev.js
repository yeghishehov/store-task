const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const paths = require("./paths");
const createCommonConfig = require("./webpack.common.js");

const devConfig = {
    // Set the mode to development or production
    mode: "development",

    // Control how source maps are generated
    devtool: "inline-source-map",

    // Spin up a server for quick development
    devServer: {
        historyApiFallback: true,
        open: true,
        host: "localhost",
        port: 8080,
        static: {
            directory: paths.build,
        }
    },

    module: {
        rules: [
            // Styles: Inject CSS into the head with source maps
            {
                test: /\.(pcss)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-modules-typescript-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportGlobals: true,
                                localIdentName: "[name]__[local]--[hash:base64:5]"
                            },
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    { loader: "postcss-loader", options: { sourceMap: true } }
                ]
            },
            {
                test: /wnf\.components[\/\\]lib[\/\\]styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            import: true,
                            modules: false
                        },
                    },
                ],
            },
        ]
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configOverwrite: {
                    compilerOptions: {
                        'noUnusedParameters': false,
                        'noUnusedLocals': false,
                    }
                }
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name]_[contenthash:12].css",
            chunkFilename: "[name]_[contenthash:12][id].css"
        }),
    ]
};

const createFinalConfig = async () => {
    const commonConfig = await createCommonConfig();
    return merge(commonConfig, devConfig);
}

module.exports = createFinalConfig;