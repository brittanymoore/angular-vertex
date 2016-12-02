import { Injectable } from "@angular/core";
import { Response, Headers } from "@angular/http";

/**
 * The Common service provides application-wide helpers and constants.
 */
@Injectable()
export class Common {

    /**
     * Empty constructor
     */
    constructor() { }

    /**
     * Wraps mock data in a object structure consistent with the "real" backend.
     * This isn't necessary for MockBackend, but gives the best results when switching between the mock and 
     * the real thing.
     * @param data Data from a mocked http
     */
    public wrapHttpData(data: any):Object {
        return {
            "d": {
                "results": data
            }
        }
    }

    /**
     * Extracts the data from a REST object, assuming it is an object structure consistent with the "real" backend.
     * @param res An HTTP Response from a web service.
     */
    public extractHttpData(res: Response):Object {
        let body = res.json();
        // In SharePoint, GETs store data in d.results, while POSTs store data in d.
        return body.d.results || body.d || { };
    }

    /**
     * Generic error handler.
     * @param error Any error.
     */
    public handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    /**
     * Provides the HTTP headers that will be passed to GET operations.
     */
    public getHeaders():Headers {
        return new Headers(
            {
                'Accept': 'application/json;odata=verbose'
            }
        );
    }

    /**
     * Provides the HTTP headers that will be passed to POST operations.
     */
    public postHeaders():Headers {
        // requestDigest is a SharePoint-specific requirement, but it doesn't interfere with MockBackend
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