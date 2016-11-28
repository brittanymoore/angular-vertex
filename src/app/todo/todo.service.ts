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

    private toDoUrl = process.env.API_URL + "/lists/getByTitle('Tasks')/items"; 
    private resultFilters = "?$select=Name,ID";

    constructor(
        private http: Http,
        private common: Common) { }

    getTasks(): Observable<Task[]> {
        return this.http
            .get(this.toDoUrl + this.resultFilters, { headers: this.common.getHeaders() })
            .map(this.common.extractHttpData)
            .catch(this.common.handleError);
    }

    create(name: string): Observable<Task> {
        let data:Object = {
            Name: name,
            __metadata: {
                type: "SP.Data.TasksListItem"
            }
        }
        return this.http
            .post(this.toDoUrl, JSON.stringify(data), { headers: this.common.postHeaders() })
            .map(this.common.extractHttpData)
            .catch(this.common.handleError);
    }

}