import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule, routedComponents } from './app.routing.module';

@NgModule({
    imports: [ 
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        routedComponents
    ],
    providers: [  ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }