import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Message } from './chat.message';

@Injectable()
export class ChatService {

    private chatUrl = 'app/chatMessages'; // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getMessages(): Promise<Message[]> {
        return this.http.get(this.chatUrl)
            .toPromise()
            .then(response => response.json().data as Message[])
            .catch(this.handleError);
    }

    create(message: Message): Promise<Message> {
        return this.http
            .post(this.chatUrl, JSON.stringify(message), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}