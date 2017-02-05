import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Task } from './task';

@Injectable()
export class ToDoService {

    private toDoUrl = process.env.API_URL + "/_api/web/lists/getByTitle('Tasks')/items"; 
    private resultFilters = "?$select=Name,ID";

    constructor(
        private http: Http
    ) { }

    getTasks(): Observable<Task[]> {
        return this.http
            .get(this.toDoUrl + this.resultFilters, { headers: this.getHeaders() })
            .map(this.extractHttpData)
            .catch(this.handleError);
    }

    create(name: string): Observable<Task> {
        let data:Object = {
            Name: name,
            __metadata: {
                type: "SP.Data.TasksListItem"
            }
        }
        return this.http
            .post(this.toDoUrl, JSON.stringify(data), { headers: this.postHeaders() })
            .map(this.extractHttpData)
            .catch(this.handleError);
    }

    // helpers

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    private extractHttpData(res: Response):Object {
        let body = res.json();
        // In SharePoint, GETs store data in d.results, while POSTs store data in d.
        return body.d.results || body.d || { };
    }

    private getHeaders():Headers {
        return new Headers(
            {
                'Accept': 'application/json;odata=verbose'
            }
        );
    }

    private postHeaders():Headers {
        // requestDigest is a SharePoint-specific requirement, but it doesn't interfere with MockBackend
        var requestDigestElem = <HTMLInputElement>document.getElementById("__REQUESTDIGEST");
        var requestDigest = (requestDigestElem != null) ? requestDigestElem.value : "";
        
        return new Headers(
            { 
                'Content-Type': 'application/json;odata=verbose',
                'Accept': 'application/json;odata=verbose',
                'X-RequestDigest': requestDigest//,
                //"IF-MATCH": "*",
                //"X-HTTP-Method": "MERGE"
            }
        );
    }

}