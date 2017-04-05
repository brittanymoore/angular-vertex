import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ToDoService } from './todo.service';
import { ToDoComponent } from './todo.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: ToDoComponent }
        ])
    ],
    declarations: [ ToDoComponent ],
    providers: [ ToDoService ]
})
export class ToDoModule { } 