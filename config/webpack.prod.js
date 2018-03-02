const webpack = require('webpack');

const ngtools = require('@ngtools/webpack');
const WebpackChunkHash = require('webpack-chunk-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].[chunkhash].min.js',
  },

  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['inline'],
      minChunks: null,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main'],
      minChunks: 2,
      async: 'common',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),

    new ngtools.AngularCompilerPlugin({
      tsConfigPath: './tsconfig.aot.json',
      entryModule: './src/app/app.module#AppModule',
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new UglifyJsPlugin(),
  ],
};
