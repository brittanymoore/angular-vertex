import './vendor';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { enableProdMode } from '@angular/core';

export const platformRef = platformBrowserDynamic();

// required for typedoc
declare var process: {
   env: {
       ENV: string,
       API_URL: string
   },
};

if (process.env.ENV !== 'development') {
  enableProdMode();
}

export function main() {
  return platformRef.bootstrapModule(AppModule).catch(err => console.error(err));
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