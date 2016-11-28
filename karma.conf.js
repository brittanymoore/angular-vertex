module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        { pattern: 'config/test.bundle.js' }
    ],
    exclude: [
    ],
    preprocessors: {
        'config/test.bundle.js': ['webpack', 'sourcemap']
    },
    webpack: require('./config/webpack.dev.js'),
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}