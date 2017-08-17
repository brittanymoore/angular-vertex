const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const WebpackChunkHash = require('webpack-chunk-hash');

// plugins
const ngtools = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// common config
const common = require('./webpack.common');

// constants
const environment = 'production';
const apiUrl = common.apiUrl;
const outputPath = path.resolve(__dirname, './../dist');

module.exports = webpackMerge(common.config, {

    output: {
        filename: '[name].[chunkhash].js',        
        publicPath: common.publicPath,
        path: outputPath
    },

    devtool: 'source-map',

    module: {
        rules: [
            { test: /\.ts$/, loader: '@ngtools/webpack' },
            {
                test: /\.scss$/, use: [
                    'exports-loader?module.exports.toString()',
                    'css-loader?sourceMap=false&importLoaders=1&minimize=true',
                    'sass-loader',
                    { loader: 'postcss-loader', options: { config: { path: './config/postcss.config.js' }}}
                ]
            },     
            { 
                test: /\.css$/, use: [
                    'exports-loader?module.exports.toString()',
                    'css-loader?sourceMap=false&importLoaders=1&minimize=true',
                    { loader: 'postcss-loader', options: { config: { path: './config/postcss.config.js' }}}
                ] 
            }     
        ]
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['main', 'vendor'],
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }            
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),

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

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            sourceMap: true,
            compress: {
                screw_ie8: true,
                warnings: false
            },            
            comments: false
        })

    ]

});
