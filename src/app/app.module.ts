import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MockModule } from './mock/mock.module';
import { AppRoutingModule, routedComponents } from './app.routing.module';

let imports = [
    BrowserModule,
    AppRoutingModule,
    HttpModule
];

// Include mocks if USE_MOCK is true.
if (process.env.USE_MOCK) {
    imports.push(MockModule);
}

@NgModule({
    imports: imports,
    declarations: [
        AppComponent,
        routedComponents
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }