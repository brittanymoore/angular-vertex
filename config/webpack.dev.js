const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SOURCE_PATH = path.resolve(__dirname, `./../${process.env.SOURCE_DIR}`);

module.exports = {
  output: {
    filename: '[name].bundle.js',
    pathinfo: true, // devtool: eval
  },

  devtool: 'eval',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: 'awesome-typescript-loader', options: { silent: true } },
          'angular2-template-loader',
          'angular-router-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      SOURCE_PATH,
      {},
    ),
  ],
};
