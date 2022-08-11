import {checkForName} from '../client/js/nameChecker'


describe('Testing the check name functionality' , () => {
    test('It should be exited', async () => {
        expect(checkForName).toBeDefined();
    });
});
describe('Testing the check name functionality' , () => {
    test('It should be a function', async () => {
        expect(typeof checkForName).toBe("function");
    });
});

describe('Testing the check name functionality' , () => {
    var name = "Picard";
    test('It should be return alert', async () => {
        const response = checkForName(name);
        expect(response).toBeDefined();
        expect(response).toBe("Welcome, Captain!");
    });
});
describe('Testing the check name functionality' , () => {
    var name = "Tuan";
    test('It should not be return alert', async () => {
        const response = checkForName(name);
        expect(response).toBeDefined();
        expect(response).toBe("");
    });
});