import { Injectable } from "@angular/core";
import { Response, Headers } from "@angular/http";

@Injectable()
export class Common {

    constructor() { }

    // this is only used for our mock - for best results, it should simulate the real backend
    public wrapHttpData(data: any):Object {
        return {
            "d": {
                "results": data
            }
        }
    }

    public extractHttpData(res: Response):Object {
        let body = res.json();
        // get requests return an array in d.results
        // post requests return the created object in d
        return body.d.results || body.d || { };
    }

    public handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    public getHeaders():Headers {
        return new Headers(
            {
                'Accept': 'application/json;odata=verbose'
            }
        );
    }

    public postHeaders():Headers {
        // requestDigest is required for SharePoint REST API 
        var requestDigestElem = <HTMLInputElement>document.getElementById("__REQUESTDIGEST");
        var requestDigest = (requestDigestElem != null) ? requestDigestElem.value : "";
        
        return new Headers(
            { 
                'Content-Type': 'application/json;odata=verbose',
                'Accept': 'application/json;odata=verbose',
                'X-RequestDigest': requestDigest
            }
        );
    }

}