import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

// mocks
import { ToDoMock } from './models/todo.mock';

import { Common } from './../app.common.service';

// required for typedoc
declare var process: {
   env: {
       ENV: string,
       API_URL: string
   },
};

export function mockBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend, common: Common) {  

    // disable mock backend when running in sharepoint
    if (process.env.ENV === 'sharepoint') {

        return new Http(realBackend, options);

    } else {

        backend.connections.subscribe((connection: MockConnection) => {

            setTimeout(() => {

                // TODO

                if (connection.request.url.match(/\/_api\/web\/lists\/getByTitle\(\'Tasks\'\)/) &&
                connection.request.method === RequestMethod.Get) {

                    let mock = new ToDoMock();
                    let tasks = common.wrapHttpData(mock.getTasks());

                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: tasks })));

                    return;

                }

                if (connection.request.url.match(/\/_api\/web\/lists\/getByTitle\(\'Tasks\'\)/) &&
                connection.request.method === RequestMethod.Post) {

                    let mock = new ToDoMock();
                    
                    let data = JSON.parse(connection.request.getBody());
                    let newTask = common.wrapHttpData(mock.addTask(data.Name));

                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: newTask })));

                    return;

                }

                let realHttp = new Http(realBackend, options);
                realHttp.get(connection.request.url).subscribe((response: Response) => { connection.mockRespond(response); });

            }, 500);

        });

        return new Http(backend, options);

    } 

}

export let mockBackendProvider = {
    provide: Http,
    deps: [ MockBackend, BaseRequestOptions, XHRBackend, Common ],
    useFactory: mockBackendFactory
}