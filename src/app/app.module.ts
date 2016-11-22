import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ToDoService } from './todo/todo.service';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule, routedComponents } from './app.routing.module';

@NgModule({
    imports: [ 
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
    ],
    declarations: [
        AppComponent,
        routedComponents
    ],
    providers: [ ToDoService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }