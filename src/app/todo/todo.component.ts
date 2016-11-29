import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Task } from './task';
import { ToDoService } from './todo.service';

@Component({
    selector: 'todo',
    templateUrl: 'todo.component.html'
})

export class ToDoComponent implements OnInit {

    tasks: Task[];
    title:string = "To-do List";
    error: any;
    form: FormGroup;

    taskName = new FormControl("", Validators.required);

    constructor(
        private fb: FormBuilder,
        private toDoService: ToDoService) { 
            this.form = fb.group({
                "taskName": this.taskName
            });
        }

    onSubmit() {
        this.add(this.taskName.value);
        this.taskName.reset();
    }

    getTasks(): void {
        this.toDoService
            .getTasks()
            .subscribe(
                tasks => this.tasks = tasks,
                error => this.error = <any>error);           
    } 

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.toDoService.create(name)
            .subscribe(
                task => this.tasks.push(task),
                error => this.error = <any>error);
    }   

    ngOnInit(): void {
        this.getTasks();
    }

}