import { Injectable } from "@angular/core";
import { Response } from "@angular/http";

@Injectable()
export class Common {

    constructor() { }

    public wrapHttpData(data: any):Object {
        return {
            "data": data
        }
    }

    public extractHttpData(res: Response):Object {
        let body = res.json();
        return body.data || { };
    }

    public handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }


}