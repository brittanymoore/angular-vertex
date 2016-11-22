import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoModule } from './todo/todo.module';

import { HttpModule } from '@angular/http';
import { AppRoutingModule, routedComponents } from './app.routing.module';

@NgModule({
    imports: [ 
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        ToDoModule
    ],
    declarations: [
        AppComponent,
        routedComponents
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }