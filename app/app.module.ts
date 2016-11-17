import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockService }  from './mocks/mock.service';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat/chat.service';
import { NavComponent } from './nav/nav.component';

// define metadata for the module
@NgModule({
  imports: [ 
    BrowserModule, // every browser app must import this
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(MockService),
  ], 
  declarations: [ 
    AppComponent, // app component
    DashboardComponent,
    ChatComponent,
    NavComponent
  ], 
  providers: [
    ChatService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
