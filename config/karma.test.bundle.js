import 'core-js'; // ES6 + reflect-metadata

// zone.js
import 'zone.js/dist/zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/jasmine-patch';

// TestBed initialization
import { TestBed } from '@angular/core/testing';

import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Make sure Karma is running correctly.
describe('Sanity Check:', () => {
  it('Karma is working.', () => {
    expect(0).toBe(0);
  });
});

const testContext = require.context('./../src', true, /\.spec\.ts/);
testContext.keys().map(testContext);
