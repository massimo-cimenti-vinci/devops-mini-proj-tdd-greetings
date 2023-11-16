import { Main } from '../src/app.js';

describe("A suite of test for the hello world greet function of the main class", function() {
    let main = new Main();
    
    it("greet function should return 'Hello, Bob' when given 'Bob'", function() {
        let result = main.greet("Bob");

        expect(result).toBe("Hello, Bob.");
    });

    it("greet function should return 'Hello' + parameter name when given a paramater", function() {
        let result = main.greet("Bob");

        expect(result).toBe("Hello, Bob.");
    });

    it("greet function should return 'Hello, my friend ' when given a NULL", function() {
        let result = main.greet(null);

        expect(result).toBe("Hello, my friend.");
    });

    it("greet function should return 'Hello, my friend ' when given a Undefined", function() {
        let result = main.greet();

        expect(result).toBe("Hello, my friend.");
    });
});