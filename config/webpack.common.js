const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const OUTPUT_PATH = path.resolve(__dirname, `./../${process.env.OUTPUT_DIR}`);

module.exports = {

    entry: {
        'main': './src/main.ts',
        'vendor': './src/vendor.ts',
        'polyfill': './src/polyfill.ts'
    },

    output: {
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js',
        publicPath: process.env.PUBLIC_PATH,
        path: OUTPUT_PATH
    },

    resolve: {
        extensions: [ '.ts', '.js' ],
        modules: [ path.resolve(__dirname, './../node_modules') ]
    },

    module: {
        rules: [
            { test: /\.html$/, loader: 'raw-loader' },
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
            title: process.env.APP_NAME,
            baseUrl: process.env.BASE_URL,
            template: './config/index.template.ejs',
            chunksSortMode: 'dependency'
        }),

        new ExtractTextPlugin('styles/[name].css'),

        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(process.env.NODE_ENV),
                'API_URL': JSON.stringify(process.env.API_URL)
            }
        }),
        
    ],

    devServer: {
        port: 4200,
        contentBase: OUTPUT_PATH,
        historyApiFallback: {
            index: process.env.PUBLIC_PATH
        },
        watchOptions: {
            ignored: '**/*.spec.ts'
        },
        proxy: {
            '/api/**': {
                target: 'http://localhost:3000',
                secure: false,
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
            }
        }
    },

    stats: {
        assets: true,
        children: false,
        errors: true,
        errorDetails: true,
        modules: false,
        warnings: false
    }

};