const webpack = require('webpack');
const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CommonsChunkPlugin } = require('webpack').optimize;

const nodeModules = path.join(process.cwd(), './../node_modules');

exports.apiUrl = ""; // can be used to prepend a static URL to web service calls
exports.config = {

    entry: {
        'main': './src/main.ts',
        'polyfill': './src/polyfill.ts'
    },

    output: {
        publicPath: '',
        filename: '[name].bundle.js',
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
                test: /\.less$/, use: [ 
                    'exports-loader?module.exports.toString()',
                    'css-loader?sourceMap=false&importLoaders=1&minimize=true',
                    'less-loader?sourceMap=false'
                ]
            },            
            { 
                test: /\.css$/, use: [
                    'exports-loader?module.exports.toString()',
                    'css-loader?sourceMap=false&importLoaders=1&minimize=true',
                ] 
            },
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    },

    plugins: [

        new CommonsChunkPlugin({
            name: "vendor",
            minChunks: (module) => module.resource && module.resource.startsWith(nodeModules),
            chunks: [ "main" ]
        }),

        new HtmlWebpackPlugin({
            title: 'My App',
            template: './config/index.template.ejs'
        })
        
    ],

    devServer: {
        historyApiFallback: true,
        port: 3000
    }

};