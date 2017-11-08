const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SOURCE_PATH = path.resolve(__dirname, `./../${process.env.SOURCE_DIR}`);

module.exports = {

    output: {
        filename: '[name].bundle.js',        
        pathinfo: true // devtool: eval
    },

    devtool: 'eval',

    module: {
        rules: [
            { 
                test: /\.ts$/, 
                use: [ { loader: 'awesome-typescript-loader', options: { silent: true }},  'angular2-template-loader',  'angular-router-loader' ],
                exclude: /node_modules/
            },
            { test: /\.scss$/, use: [ 'exports-loader?module.exports.toString()', 'css-loader', 'sass-loader' ], exclude: [ /node_modules/, /src\\global.css/ ] },
            { test: /\.css$/, use: [ 'exports-loader?module.exports.toString()', 'css-loader' ], exclude: [ /node_modules/, /src\\global.css/ ] },
            { 
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader' ]}), 
                include: [ /node_modules/, /src\\global.css/ ]
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /(.+)?angular(\\|\/)core(.+)?/,
            SOURCE_PATH,
            {}
        )
    ]

};
