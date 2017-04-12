const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

// common config
const common = require('./webpack.common');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
const API_URL = process.env.API_URL = common.apiUrl;
const USE_MOCK = process.env.USE_MOCK = true;

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
                'ENV': JSON.stringify(ENV),
                'API_URL': JSON.stringify(API_URL),
                'USE_MOCK': JSON.stringify(USE_MOCK)
            }
        }),

        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, './../src'),
            {
                // your Angular Async Route paths relative to this root directory
            }
        )

    ],

    devServer: {
        contentBase: './dev'
    }

};

module.exports = webpackMerge(common.config, webpackConfig);