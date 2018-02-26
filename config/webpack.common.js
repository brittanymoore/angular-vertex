const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const OUTPUT_PATH = path.resolve(__dirname, `./../${process.env.OUTPUT_DIR}`);

module.exports = {

  entry: {
    main: './src/main.ts',
    polyfill: './src/polyfill.ts',
    vendor: './src/vendor.ts',
  },

  output: {
    chunkFilename: '[id].chunk.js',
    path: OUTPUT_PATH,
    publicPath: process.env.PUBLIC_PATH,
    sourceMapFilename: '[name].map',
  },

  module: {
    rules: [
      { test: /\.html$/, loader: 'raw-loader' },
      {
        test: /\.(eot|svg)$/,
        use: 'file-loader?name=assets/[name].[hash:20].[ext]',
      },
      {
        test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
        use: 'url-loader?name=assets/[name].[hash:20].[ext]&limit=10000',
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('styles/[name].css'),
    new HtmlWebpackPlugin({
      baseUrl: process.env.BASE_URL,
      chunksSortMode: 'dependency',
      template: './config/index.template.ejs',
      title: process.env.APP_NAME,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(process.env.API_URL),
        ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, './../node_modules')],
  },

  stats: {
    assets: true,
    children: false,
    errorDetails: true,
    errors: true,
    modules: false,
    warnings: false,
  },

  devServer: {
    contentBase: OUTPUT_PATH,
    historyApiFallback: {
      index: process.env.PUBLIC_PATH,
    },
    port: 4200,
    proxy: {
      '/api/**': {
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        secure: false,
        target: 'http://localhost:3000',
      },
    },
    watchOptions: {
      ignored: '**/*.spec.ts',
    },
  },

};
