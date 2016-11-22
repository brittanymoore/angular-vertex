import { NgModule } from '@angular/core';  

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ToDoService } from './todo.service';
import { ToDoMock } from './todo.mock';

@NgModule({
  imports: [
    InMemoryWebApiModule.forRoot(ToDoMock, { delay: 600 })
  ],
  providers: [ ToDoService ]
})
export class ToDoModule { } 