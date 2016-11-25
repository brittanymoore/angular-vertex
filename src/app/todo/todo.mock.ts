export class ToDoMock {

  public getTasks() {
    return this.tasks;
  }

  public addTask(name: string) {
    let id = this.tasks.length + 1;
    let newTask = { id: id, name: name };
    this.tasks.push(newTask);
    return newTask;
  }

  private tasks = [
    {id: 1, name: "thing I need to do"},
    {id: 2, name: "another thing I need to do"}
  ];

}