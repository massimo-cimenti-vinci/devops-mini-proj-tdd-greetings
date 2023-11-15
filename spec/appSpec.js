import { Main } from '../src/app.js';

describe("A suite of test for the hello world greet function of the main class", function() {
    let main = new Main();
    
    it("greet function should return 'Hello, Bob' when given 'Bob'", function() {
        let result = main.greet("Bob");

        expect(result).toBe("Hello, Bob");
    });
});