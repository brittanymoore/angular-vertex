const webpack = require('webpack');

const ngtools = require('@ngtools/webpack');
const WebpackChunkHash = require('webpack-chunk-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

    output: {
        filename: '[name].[chunkhash].min.js'      
    },

    module: {
        rules: [
            { test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/, loader: '@ngtools/webpack', exclude: /node_modules/ },
            { 
                test: /\.scss$/,
                use: [
                    'exports-loader?module.exports.toString()',
                    'css-loader?sourceMap=false&importLoaders=1&minimize=true',
                    'sass-loader',
                    { loader: 'postcss-loader', options: { config: { path: './config/postcss.config.js' }}}    
                ],
                exclude: [ /node_modules/, /src\\global.css/ ]
            },
            { 
                test: /\.css$/, use: [
                    'exports-loader?module.exports.toString()',
                    'css-loader?sourceMap=false&importLoaders=1&minimize=true',
                    { loader: 'postcss-loader', options: { config: { path: './config/postcss.config.js' }}}
                ],
                exclude: [ /node_modules/, /src\\global.css/ ]
            },
            { 
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [
                    'css-loader?sourceMap=false&importLoaders=1&minimize=true',
                    { loader: 'postcss-loader', options: { config: { path: './config/postcss.config.js' }}}
                ]}), 
                include: [ /node_modules/, /src\\global.css/ ]
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

        new ngtools.AngularCompilerPlugin({
            tsConfigPath: './tsconfig.aot.json',
            entryModule: './src/app/app.module#AppModule'
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new UglifyJsPlugin()

    ]

};
