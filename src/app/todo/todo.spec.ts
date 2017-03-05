import { async, TestBed, inject, getTestBed } from '@angular/core/testing';

import { MockModule } from './../mock/mock.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ToDoComponent } from './todo.component';
import { ToDoService } from './todo.service';

import { ToDoMock } from './../mock/models/todo.mock';

import { Observable } from 'rxjs/Rx';

class MockToDoService extends ToDoService { 
    mock: ToDoMock;
    constructor() {
        super(null);
        this.mock = new ToDoMock();
    }
    getTasks() {
        return Observable.of(this.mock.getTasks());
    }
    create(name) {
        return Observable.of(this.mock.addTask(name));
    }
}

describe('UNIT: ToDo', () => {

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [
                ToDoComponent
            ],
            imports: [
                ReactiveFormsModule
            ],
            providers: [
                { provide: ToDoService, useClass: MockToDoService }
            ]
        });

        TestBed.overrideComponent(ToDoComponent, {
            set: {
                template: "<div>Test</div>"
            }
        })

        TestBed.compileComponents();

    });

    describe("Controller:", () => {

        let fixture, toDo, mock, promise, toDoService;

        beforeEach(() => {

            mock = new ToDoMock();

            toDoService = TestBed.get(ToDoService);

            fixture = TestBed.createComponent(ToDoComponent);
            toDo = fixture.componentInstance;

            spyOn(toDoService, "getTasks").and.callThrough();
            spyOn(toDoService, "create").and.callThrough();

        });

        it("Should initialize correctly.", () => {

            expect(toDo.title).toBe("To-do List");  

            toDo.ngOnInit();
            expect(toDoService.getTasks).toHaveBeenCalled();
            expect(toDo.tasks.length).toBe(2);

        });

        describe("Get Tasks:", () => {

            it("Should call service to get tasks.", () => {            
                toDo.getTasks();
                expect(toDoService.getTasks).toHaveBeenCalled();
            });

            it("Should set internal tasks variable based on service results.", () => {
                toDo.getTasks();
                expect(toDo.tasks.length).toBe(2);               
            });

        });

        describe("Add Task:", () => {

            it("Should call service to add task.", () => {
                toDo.add("test");
                expect(toDoService.create).toHaveBeenCalled();
            });

        });

    });

});