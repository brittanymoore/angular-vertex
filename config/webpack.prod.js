const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

// plugins
const ngtools = require('@ngtools/webpack');
const WebpackChunkHash = require('webpack-chunk-hash');

// common config
const common = require('./webpack.common');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const API_URL = process.env.API_URL = common.apiUrl;

const OUTPUT_PATH = path.resolve(__dirname, './../dist');
const SOURCE_PATH = path.resolve(__dirname, './../src');

module.exports = webpackMerge(common.config, {

    output: {
        filename: '[name].[chunkhash].js',        
        publicPath: common.publicPath,
        path: OUTPUT_PATH
    },

    devtool: 'source-map',

    module: {
        rules: [
            { test: /\.ts$/, loader: '@ngtools/webpack', exclude: /node_modules/ },
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
            chunks: ['main'],
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
                'ENV': JSON.stringify(ENV),
                'API_URL': JSON.stringify(API_URL)
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

    ],

    devServer: {
        contentBase: OUTPUT_PATH
    }

});
