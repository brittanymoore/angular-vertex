require('ts-node/register');

exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: ['./../src/**/*.e2e.ts'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    baseUrl: 'http://localhost:3000',
    //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    useAllAngular2AppRoots: true
};