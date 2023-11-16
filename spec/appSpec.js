import { Main } from '../src/app.js';

describe("A suite of test for the hello world greet function of the main class", function() {
    let main = new Main();
    let list = ["Jill","Jane"];
    
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

    it("greet function should return 'Hello, my friend ' when given a void String", function() {
        let result = main.greet("");

        expect(result).toBe("Hello, my friend.");
    });

    it("greet function should return 'HELLO, BOB!' when given 'BOB'", function() {
        let result = main.greet("BOB");

        expect(result).toBe("HELLO, BOB!");
    });

    it("greet function should return 'HELLO' + uppercase parameter when given a parameter in uppercase", function() {
        let result = main.greet("BOB");

        expect(result).toBe("HELLO, BOB!");
    });

    it("greet function should return 'Hello, Jill and Jane.' when given a list with 2 name", function() {
        let result = main.greet(list);

        expect(result).toBe("Hello, Jill and Jane.");
    });
});