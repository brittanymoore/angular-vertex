export class InMemoryDataService {

  createDb() {
    let todo = [
      {id: 1, name: "thing I need to do"},
      {id: 1, name: "another thing I need to do"}
    ];
    return { todo };
  }

}