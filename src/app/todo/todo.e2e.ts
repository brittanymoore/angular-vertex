import { browser, by, element } from 'protractor';

describe("E2E: ToDo:", () => {

    let nameInput, addButton, taskList;

    beforeEach(() => {

        // Redirect to todo route.
        browser.get('/todo');

        browser.waitForAngular();

        // Get relevant form controls.
        nameInput = element(by.id('taskName'));
        addButton = element(by.id('taskAdd'));

    });

    it("Should disable add button when task field is empty.", () => {

        expect(nameInput.getAttribute('value')).toBe('');
        expect(addButton.isEnabled()).toBe(false);
       
    });

    it("Should enable add button when task field contains a value.", () => {

        nameInput.sendKeys('test task');
        expect(nameInput.getAttribute('value')).toBe('test task');
        expect(addButton.isEnabled()).toBe(true); 

    });

    it("Should add new task and clear form after add button clicked.", () => {

        // There should be two mock tasks initially.
        let tasks = element.all(by.css('#taskList > li'));
        tasks.count().then((count) => {
            expect(count).toEqual(2);
        });

        // Provide a name and click Add.
        nameInput.sendKeys('test task'); 
        addButton.click();

        // Wait for click response to complete.
        browser.waitForAngular();

        // Verify page state.
        tasks = element.all(by.css('#taskList > li'));
        tasks.count().then((count) => {
            expect(count).toEqual(3);
        }); 
        expect(nameInput.getAttribute('value')).toBe('');

    });

});