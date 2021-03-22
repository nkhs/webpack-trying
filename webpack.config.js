const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin')
const webpack = require('webpack'); //to access built-in plugins
const ConsoleLogOnBuildWebpackPlugin = require('./ConsoleLogOnBuildWebpackPlugin');
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BundleOptimizeHelperWebpackPlugin = require('webpack-optimize-helper').BundleOptimizeHelperWebpackPlugin
module.exports = {
    entry: {
        index: {
            import: './src/index.js',
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
        new WriteFilePlugin(),
        new webpack.ProgressPlugin(),
        // new ConsoleLogOnBuildWebpackPlugin({}),
        // new BundleAnalyzerPlugin(),
        new BundleOptimizeHelperWebpackPlugin()
    ],
    // mode: 'development',
    // devtool: "source-map",
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            // {
            //     test: /\.(js|jsx)$/,
            //     // exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         // options: {
            //         //     presets: ['@babel/preset-env']
            //         // }
            //     }
            // },
            {
                test: /\.txt$/,
                use: {
                    loader: path.resolve(__dirname, 'HelloLoader.js'),
                },
            },
        ]
    }
};