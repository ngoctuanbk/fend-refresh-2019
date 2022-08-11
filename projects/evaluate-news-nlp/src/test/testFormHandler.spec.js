import { handleSubmit } from "../client/js/formHandler"

describe('Testing the handle submit functionality' , () => {
    test('It should be exited', async () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('Testing the handle submit functionality' , () => {
    test('It should be a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});