const webpack = require('webpack');
const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// constants
const APP_NAME = 'My App';
const nodeModules = path.join(process.cwd(), './../node_modules');

exports.API_URL = '';
exports.PUBLIC_PATH = '';

exports.config = {

    entry: {
        'main': './src/main.ts',
        'polyfill': './src/polyfill.ts'
    },

    output: {
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
                    'postcss-loader?config=./config/postcss.config.js',
                    'less-loader?sourceMap=false'
                ]
            },            
            { 
                test: /\.css$/, use: [
                    'exports-loader?module.exports.toString()',
                    'css-loader?sourceMap=false&importLoaders=1&minimize=true',
                    'postcss-loader?config=./config/postcss.config.js',                    
                ] 
            },
            { 
                test: /\.html$/, loader: 'raw-loader' 
            },
            {
                test: /\.(eot|svg)$/,
                use: 'file-loader?name=assets/[name].[hash:20].[ext]'
            },
            {
                test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
                use: 'url-loader?name=assets/[name].[hash:20].[ext]&limit=10000'
            }
        ]
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: (module) => module.resource && module.resource.startsWith(nodeModules),
            chunks: [ 'main', 'polyfill' ]
        }),

        new HtmlWebpackPlugin({
            title: APP_NAME,
            template: './config/index.template.ejs',
            cache: true
        })
        
    ],

    devServer: {
        historyApiFallback: true,
        port: 3000
    }

};