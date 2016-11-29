
import { ToDoService } from './todo.service';
import { Common } from './../app.common.service';
import { MockModule } from './../mock/mock.module';

import { HttpModule } from '@angular/http';
import { TestBed, inject, async, getTestBed } from '@angular/core/testing';

describe('todo service', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                MockModule
            ],
            providers: [
                ToDoService,
                Common
            ]
        });
        TestBed.compileComponents();
    });

    it('sanity check', async(() => {
        let todoService: ToDoService = getTestBed().get(ToDoService);
        todoService.getTasks().subscribe(
            (tasks) => {
                expect(tasks.length).toBe(2);
            }
        )
    }))

});