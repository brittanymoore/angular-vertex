const webpack = require('webpack');
const path = require('path');

// constants
const APP_NAME = 'My App';
const OUTPUT_PATH = path.resolve(__dirname, './../dev');
const SOURCE_PATH = path.resolve(__dirname, './../src');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // entry point(s) for the bundle
    entry: {
        'main': './src/main.ts',
        'polyfill': './src/polyfill.ts'
    },

    // configuration options for the files webpack generates
    // filename - naming pattern for the output bundle files
    // sourceMapFilename - naming pattern for the output source map files
    // path - the location where files will be created
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        path: OUTPUT_PATH,
        pathinfo: true // makes devtool: eval more effective
    },

    // specifies the developer tool to use with debugging
    // in a development build, we want the fastest tool, which is eval
    devtool: 'eval',

    // resolve.extensions tells webpack which extensions should be used to resolve modules
    // extensions allows you to use import statements without specifying certain extensions
    // modules specifies the location of node_modules relative to the config file
    resolve: {
        extensions: [ '.ts', '.js' ],
        modules: [ path.resolve(__dirname, './../node_modules') ]
    },

    // module.rules specifies which webpack loaders to use for which file types
    module: {
        rules: [
            { test: /\.ts$/, use: [ 'awesome-typescript-loader', 'angular2-template-loader' ]},
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css$/, use: [ 'exports-loader?module.exports.toString()', 'css-loader' ]}
        ]
    },

    // a list of plugins that are used to further customize the build
    plugins: [
        // this plugin is necessary for angular's routing to work correctly
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            SOURCE_PATH,
            {}
        ),
        new HtmlWebpackPlugin({
            title: APP_NAME,
            template: './config/index.template.ejs',
            chunksSortMode: 'dependency'
        })
    ],

    // options for running with webpack-dev-server
    devServer: {
        contentBase: OUTPUT_PATH,
        port: 3000
    }

}
