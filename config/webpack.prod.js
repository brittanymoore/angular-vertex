const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

// plugins
const ngtools = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// common config
const common = require('./webpack.common');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const API_URL = process.env.API_URL = common.apiUrl;
const USE_MOCK = process.env.USE_MOCK = false;

const webpackConfig = {

    output: {
        publicPath: common.PUBLIC_PATH,
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
                'ENV': JSON.stringify(ENV),
                'API_URL': JSON.stringify(API_URL),
                'USE_MOCK': JSON.stringify(USE_MOCK)
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ]

};

module.exports = webpackMerge(common.config, webpackConfig);