const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

// common config
const common = require('./webpack.common');

// constants
const environment = 'development';
const apiUrl = common.apiUrl;
const outputPath = path.resolve(__dirname, './../dev');
const sourcePath = path.resolve(__dirname, './../src');

const webpackConfig = {

    output: {
        filename: '[name].bundle.js',        
        publicPath: '',
        path: outputPath,
        pathinfo: true // helps with devtool: eval
    },

    devtool: 'eval', 

    module: {
        rules: [
            { test: /\.ts$/, use: [ 'awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader' ] },
            { test: /\.scss$/, use: [ 'raw-loader', 'sass-loader' ] },     
            { test: /\.css$/, use: [ 'raw-loader' ] },
        ]
    },

    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(environment),
                'API_URL': JSON.stringify(apiUrl)
            }
        }),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            sourcePath,
            {}
        )

    ],

    devServer: {
        contentBase: outputPath
    }

};

module.exports = webpackMerge(common.config, webpackConfig);
