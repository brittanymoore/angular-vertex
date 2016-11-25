import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Task } from './task';

@Injectable()
export class ToDoService {

    private toDoUrl = 'app/todo'; // url to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    getTasks(): Observable<Task[]> {
        return this.http
            .get(this.toDoUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    create(name: string): Observable<Task> {
        return this.http
            .post(this.toDoUrl, JSON.stringify({name: name}), { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

}