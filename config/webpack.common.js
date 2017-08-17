const webpack = require('webpack');
const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// constants
const appName = 'My App';

exports.apiUrl = '';
exports.publicPath = '';

exports.config = {

    entry: {
        'main': './src/main.ts',
        'polyfill': './src/polyfill.ts',
        'vendor': './src/vendor.ts'
    },

    output: {
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: [ '.ts', '.js' ],
        modules: [ path.resolve(__dirname, './../node_modules') ]
    },

    module: {
        rules: [
            { 
                test: /\.html$/, loader: 'raw-loader' 
            },
            {
                test: /\.(eot|svg)$/,
                loader: 'file-loader?name=assets/[name].[hash:20].[ext]'
            },
            {
                test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
                loader: 'url-loader?name=assets/[name].[hash:20].[ext]&limit=10000'
            }
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
            title: appName,
            template: './config/index.template.ejs',
            chunksSortMode: 'dependency'
        })
        
    ],

    devServer: {
        historyApiFallback: true,
        port: 3000
    }

};