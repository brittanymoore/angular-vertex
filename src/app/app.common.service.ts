import { Injectable } from "@angular/core";
import { Response, Headers } from "@angular/http";

@Injectable()
export class Common {

    constructor() { }

    public handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

}