import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if (process.env.ENV !== 'development') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch((e: Error) => console.error(e));
