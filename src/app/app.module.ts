import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Common } from './app.common.service';
import { ToDoModule } from './todo/todo.module';
import { MockModule } from './mock/mock.module';
import { AppRoutingModule, routedComponents } from './app.routing.module';

let imports = [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToDoModule,
    HttpModule
];

// do not use the mock module within SharePoint
if (process.env.ENV !== 'sharepoint') {
    imports.push(MockModule);
}

@NgModule({
    imports: imports,
    declarations: [
        AppComponent,
        routedComponents
    ],
    providers: [ Common ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }