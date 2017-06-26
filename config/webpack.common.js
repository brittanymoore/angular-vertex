const webpack = require('webpack');
const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// constants
const appName = 'My App';
const nodeModules = path.join(process.cwd(), './../node_modules');

exports.apiUrl = '';
exports.publicPath = '';

exports.config = {

    entry: {
        'main': './src/main.ts',
        'polyfill': './src/polyfill.ts',
        'vendor': './src/vendor.ts'
    },

    output: {
        filename: '[name].[chunkhash].js',
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