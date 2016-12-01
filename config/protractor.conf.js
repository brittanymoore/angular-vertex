// An example configuration file.
require('ts-node/register');
exports.config = {

  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./../src/**/*.e2e.ts'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  baseUrl: 'http://localhost:3000',
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  useAllAngular2AppRoots: true

};