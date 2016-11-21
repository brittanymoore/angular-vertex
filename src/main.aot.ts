import './vendor';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModuleNgFactory } from './../compiled-aot/src/app/app.module.ngfactory';

import { enableProdMode } from '@angular/core';

export const platformRef = platformBrowserDynamic();

if (process.env.ENV === 'production') {
  enableProdMode();
}

export function main() {
  return platformRef.bootstrapModuleFactory(AppModuleNgFactory).catch(err => console.error(err));
}

// support async tag or hmr
switch (document.readyState) {
  case 'interactive':
  case 'complete':
    main();
    break;
  case 'loading':
  default:
    document.addEventListener('DOMContentLoaded', () => main());
}