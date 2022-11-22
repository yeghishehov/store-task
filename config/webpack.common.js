const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./paths");

const createCommonConfig = async () => { 
    return {
    // Where webpack looks to start building the bundle
    entry: paths.src("index.tsx"),

    // Where webpack outputs the assets and bundles
    output: {
        path: paths.build,
        filename: "[name]_[id].bundle.js",
        publicPath: paths.publicPath,
        chunkFilename: '[name]_[id].js'
    },

    // Customize the webpack build process
    plugins: [
        // Removes/cleans build folders and unused assets when rebuilding
        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.assets,
                    to: paths.publicPath,
                    globOptions: {
                        ignore: ["*.DS_Store"]
                    },
                    noErrorOnMissing: true
                },
                { from: paths.src("manifest.json"), to: paths.publicPath },
                { from: paths.src("favicon.ico"), to: paths.publicPath },
                { from: paths.src("logo512.png"), to: paths.publicPath },
                { from: paths.src("logo192.png"), to: paths.publicPath },
            ]
        }),

        // Generates an HTML file from a template
        // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
        new HtmlWebpackPlugin({
            scriptLoading: "defer",
            title: "store-task",
            template: paths.getTemplatePath("index.html"), // template file
            favicon: "",
            filename: "index.html", // output file
            chunks: "main"
        }),

        new webpack.DefinePlugin({
            IS_PRODUCTION: process.env.NODE_ENV === 'production'
        })
    ],

    // Determine how modules within the project are treated
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    transpileOnly: true
                },
            },

            // Images: Copy image files to build folder
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

            // Fonts and SVGs: Inline files
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, 
                exclude: /node_modules/,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[contenthash].[ext]',
                      }
                    }
                ]
            }
        ]
    },

    resolve: {
        modules: [paths.src(), "node_modules"],
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        alias: {
            "src": paths.src(),
            "@assets": paths.assets,
        }
    }
}};

module.exports = createCommonConfig;