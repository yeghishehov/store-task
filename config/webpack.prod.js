const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { InjectManifest } = require('workbox-webpack-plugin');

const paths = require("./paths");
const createCommonConfig = require("./webpack.common.js");

const prodConfig = {
    mode: "production",
    devtool: false,
    output: {
        path: paths.build,
        publicPath: paths.publicPath,
        chunkFilename: "[name]_[contenthash:12]_[id].js",
        filename: "[name]_[contenthash:12].js",
        hashFunction: "md5",
        hashDigest: "hex"
    },
    module: {
        rules: [
            {
                test: /\.(pcss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                            modules: true
                        }
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /wnf\.components\/lib\/styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            import: true,
                            sourceMap: false,
                            modules: false
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        // Extracts CSS into separate files
        new MiniCssExtractPlugin({
            filename: "[name]_[contenthash:12].css",
            chunkFilename: "[name]_[contenthash:12][id].css"
        }),
        new TerserJSPlugin({}),
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsOptions: { source: false }
        }),
        new InjectManifest({
            swSrc: paths.src("service-worker.ts"),
            swDest: "service-worker.js",
            maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
        })
    ],
    optimization: {
        minimize: true,
        removeAvailableModules: true,
        removeEmptyChunks: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "all",
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/
                }
            }
        },
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserJSPlugin({
                terserOptions: {
                    cache: true,
                    ecma: 5,
                    mangle: true,
                    keep_classnames: false,
                    keep_fnames: false,
                    output: {
                        comments: false
                    },
                    parallel: true,
                    safari10: true,
                    toplevel: true,
                    wrap_iife: true
                }
            })
        ]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};

const createFilialConfig = async () => {
    const commonConfig = await createCommonConfig();
    return merge(commonConfig, prodConfig);
}

module.exports = createFilialConfig;
