var webpack = require('webpack');
var path = require('path');

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');

exports.apiUrl = ""; // can be used to prepend a static URL to web service calls
exports.config = {

    entry: {
        'main': './src/main.ts'
    },

    output: {
        publicPath: '',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: [ '.ts', '.js' ],
        // modules is required when webpack config is not in root directory.
        modules: [ path.resolve(__dirname, './../node_modules') ]
    },

    module: {
        rules: [
            { test: /\.less$/, use: [ 'to-string-loader', 'css-loader', 'less-loader' ] },
            { test: /\.css$/, use: ['to-string-loader', 'css-loader'] },
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
            title: 'Vertex',
            template: './config/index.template.ejs'
        })

    ],

    devServer: {
        historyApiFallback: true,
        port: 3000
    }

};