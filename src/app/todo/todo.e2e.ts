import { browser, by, element } from 'protractor';

describe('App', () => {

    beforeEach(() => {
        browser.get('/todo');
    });

    it('sanity check', () => {

        let nameInput = element(by.id('taskName'));
        let submitButton = element(by.id('taskSubmit'));

        expect(submitButton.isEnabled()).toBe(false);

        nameInput.sendKeys('Test');

        expect(submitButton.isEnabled()).toBe(true); 
       
    });

});