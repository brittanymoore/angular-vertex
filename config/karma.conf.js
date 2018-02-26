const getWebpackConfig = require('./../webpack.config');
webpackConfig = getWebpackConfig('dev');
webpackConfig.output = {};
webpackConfig.module.rules.push({
  enforce: 'post',
  exclude: /node_modules|\.spec\.ts$/,
  loader: 'istanbul-instrumenter-loader',
  test: /\.ts$/,
});

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['Chrome'],
    client: {
      clearContext: false,
    },
    coverageReporter: {
      type: 'text',
    },
    files: [{ pattern: './karma.test.bundle.js' }],
    frameworks: ['jasmine'],
    preprocessors: {
      './karma.test.bundle.js': ['webpack', 'sourcemap'],
    },
    reporters: ['spec', 'coverage'],
    singleRun: false,
    specReporter: {
      failFast: true,
      suppressErrorSummary: true,
    },
    webpack: webpackConfig,
  });
};
