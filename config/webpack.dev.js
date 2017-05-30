const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

// common config
const common = require('./webpack.common');

// constants
const environment = 'development';
const apiUrl = common.apiUrl;

const webpackConfig = {

    output: {
        publicPath: '',
        path: path.resolve(__dirname, './../dev'),
        pathinfo: true // helps with devtool: eval
    },

    devtool: 'eval', 

    module: {
        rules: [
            { 
                test: /\.ts$/, use: [ 
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular-router-loader'
                ] 
            }
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
            path.resolve(__dirname, './../src'),
            {}
        )

    ],

    devServer: {
        contentBase: './dev'
    }

};

module.exports = webpackMerge(common.config, webpackConfig);
