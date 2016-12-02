import './vendor';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModuleNgFactory } from './../compiled-aot/src/app/app.module.ngfactory';
import { enableProdMode } from '@angular/core';

if (process.env.ENV !== 'development') {
  enableProdMode();
}

function main() {
  return platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory).catch(err => console.error(err));
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
