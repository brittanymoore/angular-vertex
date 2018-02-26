require('ts-node/register');

exports.config = {
  baseUrl: 'http://localhost:3000',
  capabilities: {
    browserName: 'chrome',
  },
  directConnect: true,
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
  specs: ['./../src/**/*.e2e.ts'],
  //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  useAllAngular2AppRoots: true,
};
