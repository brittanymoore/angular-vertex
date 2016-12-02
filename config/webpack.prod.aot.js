var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var common = require('./webpack.common');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngtools = require('@ngtools/webpack');

const ENV = process.env.NODE_ENV = process.env.ENV = common.environments().production;
const API_URL = process.env.API_URL = common.baseUrl(); 

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
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      path.resolve(__dirname, './../src'),
      {
        // your Angular Async Route paths relative to this root directory
      }
    ),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'ENV': JSON.stringify(ENV),
      'API_URL': JSON.stringify(API_URL),
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'API_URL': JSON.stringify(API_URL)
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Vertex',
      template: './config/index.template.ejs'
    }),
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig.aot.json',
      entryModule: './src/app/app.module#AppModule'
    })
  ],

  module: {
    loaders: [
      // .ts files for TypeScript
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


// Our Webpack Defaults
var defaultConfig = {

  devtool: false,

  output: {
    filename: '[name]-aot.bundle.min.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: [ '.ts', '.js' ],
    modules: [ path.resolve(__dirname, './../node_modules') ]
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: true,
    crypto: 'empty',
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false,
    clearImmediate: false,
    setImmediate: false
  }

};

module.exports = webpackMerge(defaultConfig, webpackConfig);
