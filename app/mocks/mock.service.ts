import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockService implements InMemoryDbService {

  createDb() {

    let chatMessages = [
        {
            name: "Brittany",
            message: "This message is coming from mock $http data."
        },
        {
            name: "Ann",
            message: "We can use this to test angular without SharePoint."
        }
    ];

    return { chatMessages };

  }

}