const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

// plugins
const ngtools = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// common config
const common = require('./webpack.common');

// constants
const environment = 'production';
const apiUrl = common.apiUrl;

const webpackConfig = {

    output: {
        publicPath: common.publicPath,
        path: path.resolve(__dirname, './../dist')
    },

    devtool: 'source-map',

    module: {
        rules: [
            { test: /\.ts$/, loader: '@ngtools/webpack' }        
        ]
    },

    plugins: [

        new ngtools.AotPlugin({
            tsConfigPath: './tsconfig.aot.json',
            mainPath: './src/main.ts'
        }),

        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(environment),
                'API_URL': JSON.stringify(apiUrl)
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ]

};

module.exports = webpackMerge(common.config, webpackConfig);