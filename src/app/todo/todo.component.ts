import { Component, OnInit } from '@angular/core';

import { Task } from './task';
import { ToDoService } from './todo.service';

@Component({
    selector: 'todo',
    templateUrl: 'todo.component.html'
})

export class ToDoComponent implements OnInit {

    tasks: Task[];
    title = "To-do List";
    error: any;

    constructor(
        private toDoService: ToDoService) { }

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