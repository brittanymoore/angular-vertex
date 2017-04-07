import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

// import mocks from ./models here.

export function mockBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {  


        backend.connections.subscribe((connection: MockConnection) => {

            setTimeout(() => {
                
                // match requests here.

            }, 500);

        });

        return new Http(backend, options);

}

export let mockBackendProvider = {
    provide: Http,
    deps: [ MockBackend, BaseRequestOptions, XHRBackend ],
    useFactory: mockBackendFactory
}