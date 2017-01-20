var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');

// common config
var common = require('./webpack.common');

// plugins
var ngtools = require('@ngtools/webpack');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const API_URL = process.env.API_URL = common.apiUrl; 
const USE_MOCK = process.env.USE_MOCK = true;

// Webpack Config
var webpackConfig = {

    entry: {
        'main': './src/main.aot.ts'
    },

    output: {
        publicPath: '',
        path: path.resolve(__dirname, './../dist-aot'),
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
        }),
        new ngtools.AotPlugin({
            tsConfigPath: './tsconfig.aot.json',
            entryModule: __dirname + './../src/app/app.module#AppModule'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    '@ngtools/webpack'
                ]
            },
            { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    }

};

module.exports = webpackMerge(common.config, webpackConfig);
