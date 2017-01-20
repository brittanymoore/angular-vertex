export class ToDoMock {

    public getTasks() {
        return this.tasks;
    }

    public addTask(name: string) {
        let id = this.tasks.length + 1;
        let newTask = { Id: id, Name: name };
        this.tasks.push(newTask);
        return newTask;
    }

    private tasks = [
        { Id: 1, Name: "thing I need to do" },
        { Id: 2, Name: "another thing I need to do" }
    ];

}