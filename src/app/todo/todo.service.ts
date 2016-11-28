import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Task } from './task';
import { Common } from './../app.common.service';

@Injectable()
export class ToDoService {

    private toDoUrl = 'app/todo'; // url to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http,
        private common: Common) { }

    getTasks(): Observable<Task[]> {
        return this.http
            .get(this.toDoUrl)
            .map(this.common.extractHttpData)
            .catch(this.common.handleError);
    }

    create(name: string): Observable<Task> {
        return this.http
            .post(this.toDoUrl, JSON.stringify({name: name}), { headers: this.headers })
            .map(this.common.extractHttpData)
            .catch(this.common.handleError);
    }

}