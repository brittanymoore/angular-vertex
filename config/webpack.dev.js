var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var common = require('./common');

const ENV = process.env.NODE_ENV = process.env.ENV = common.environments().development;
const API_URL = process.env.API_URL = common.baseUrl(); 

// Webpack Config
var webpackConfig = {
  entry: {
    'main': './src/main.ts',
  },

  output: {
    publicPath: '',
    path: path.resolve(__dirname, './../dev'),
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
    new webpack.DefinePlugin({
      'ENV': JSON.stringify(ENV),
      'API_URL': JSON.stringify(API_URL),
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'API_URL': JSON.stringify(API_URL)
      }
    })
  ],

  module: {
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
      { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  }

};


// Our Webpack Defaults
var defaultConfig = {

  devtool: 'inline-source-map', // gives more accurate stack trace when testing

  output: {
    filename: '[name].bundle.js',
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