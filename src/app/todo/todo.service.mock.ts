import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ToDoMock } from './todo.mock';

export let mockBackendProvider = {
    provide: Http,
    deps: [ MockBackend, BaseRequestOptions, XHRBackend ],
    useFactory: (backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) => {

        backend.connections.subscribe((connection: MockConnection) => {

            setTimeout(() => {

                if (connection.request.url.match(/app\/todo/) &&
                connection.request.method === RequestMethod.Get) {

                    let mock = new ToDoMock();
                    let tasks = {
                        "data": mock.getTasks()
                    };

                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: tasks })));

                    return;

                }

                if (connection.request.url.match(/app\/todo/) &&
                connection.request.method === RequestMethod.Post) {

                    let mock = new ToDoMock();
                    
                    let data = JSON.parse(connection.request.getBody());
                    let newTask = {
                        "data": mock.addTask(data.name)
                    }

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