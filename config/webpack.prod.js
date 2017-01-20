var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');

// common config
var common = require('./webpack.common');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const API_URL = process.env.API_URL = common.apiUrl; 
const USE_MOCK = process.env.USE_MOCK = true;

var webpackConfig = {

    entry: {
        'main': './src/main.ts'
    },

    output: {
        publicPath: '',
        path: path.resolve(__dirname, './../dist'),
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'API_URL': JSON.stringify(API_URL),
                'USE_MOCK': JSON.stringify(USE_MOCK)
            }
        })
    ],

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader?tsconfig=./tsconfig.json',
                    'angular2-template-loader',
                    'angular2-router-loader'
                ]
            },
            { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    }

};

module.exports = webpackMerge(common.config, webpackConfig);