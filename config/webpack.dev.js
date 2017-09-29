const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

// common config
const common = require('./webpack.common');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
const API_URL = process.env.API_URL = common.apiUrl;

const OUTPUT_PATH = path.resolve(__dirname, './../dev');
const SOURCE_PATH = path.resolve(__dirname, './../src');

module.exports = webpackMerge(common.config, {

    output: {
        filename: '[name].bundle.js',        
        publicPath: '',
        path: OUTPUT_PATH,
        pathinfo: true // helps with devtool: eval
    },

    devtool: 'eval', 

    module: {
        rules: [
            { 
                test: /\.ts$/, 
                use: [ 'awesome-typescript-loader',  'angular2-template-loader',  'angular-router-loader' ],
                exclude: /node_modules/
            },
            { test: /\.scss$/, use: [ 'exports-loader?module.exports.toString()', 'css-loader', 'sass-loader' ] },
            { test: /\.css$/, use: [ 'exports-loader?module.exports.toString()', 'css-loader' ], exclude: /node_modules/ }
        ]
    },

    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'API_URL': JSON.stringify(API_URL)
            }
        }),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            SOURCE_PATH,
            {}
        )

    ],

    devServer: {
        contentBase: OUTPUT_PATH
    }

});
