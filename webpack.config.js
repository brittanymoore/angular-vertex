const webpackMerge = require('webpack-merge');
const dotenv = require('dotenv');

module.exports = function(env) {

  process.env.NODE_ENV = (env === 'dev') ? 'development' : 'production';

  dotenv.config({ path: `./config/.env.${process.env.NODE_ENV}` });
  dotenv.config({ path: './config/.env.default' });

  const commonConfig = require('./config/webpack.common.js');
  const config = require(`./config/webpack.${env}.js`);

  return webpackMerge(commonConfig, config);

};
