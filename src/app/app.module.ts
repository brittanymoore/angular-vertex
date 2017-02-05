import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ToDoModule } from './todo/todo.module';
import { MockModule } from './mock/mock.module';
import { AppRoutingModule, routedComponents } from './app.routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        ToDoModule,
        HttpModule,
        MockModule
    ],
    declarations: [
        AppComponent,
        routedComponents
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }