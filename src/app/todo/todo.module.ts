import { NgModule } from '@angular/core';  

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';

import { mockBackendProvider } from './todo.service.mock';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { ToDoService } from './todo.service';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [ 
    ToDoService,
    mockBackendProvider,
    MockBackend,
    BaseRequestOptions ],
})
export class ToDoModule { } 