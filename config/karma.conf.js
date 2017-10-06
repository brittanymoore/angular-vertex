module.exports = function (config) {
    config.set({
        basePath: '',
        browsers: ['Chrome'],        
        client: {
            clearContext: false
        },
        coverageReporter: {
            type: 'text'
        },
        frameworks: ['jasmine'],
        files: [
            { pattern: './karma.test.bundle.js' }
        ],
        preprocessors: {
            './karma.test.bundle.js': ['webpack', 'sourcemap']
        },
        reporters: ['spec', 'coverage'],
        specReporter: {
            failFast: true,
            suppressErrorSummary: true
        },
        singleRun: false,
        webpack: require('./webpack.dev.js')        
    });
}