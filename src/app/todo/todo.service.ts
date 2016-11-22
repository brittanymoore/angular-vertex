import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from './task';

@Injectable()
export class ToDoService {

    private toDoUrl = 'app/todo'; // url to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getTasks(): Promise<Task[]> {

        return this.http
            .get(this.toDoUrl)
            .toPromise()
            .then(response => response.json().data as Task[])
            .catch(this.handleError);

    }

    create(name: string):Promise<Task> {
        return this.http   
            .post(this.toDoUrl, JSON.stringify({name: name}), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

}