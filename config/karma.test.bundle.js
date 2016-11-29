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
    platformBrowserDynamicTesting()
);

// Sanity test
describe('Sanity Check - Karma is working', () => {
    it('1 + 1 => 2', () => {
        expect(1 + 1).toBe(2);
    });
});

// recursively seek out files ending with .spec.ts
// this should prevent us from having to add a require line for each new test file
var testContext = require.context('../src', true, /\.spec\.ts/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

var modules = requireAll(testContext);