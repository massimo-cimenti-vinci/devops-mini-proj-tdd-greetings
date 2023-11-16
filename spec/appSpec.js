import { Main } from '../src/app.js';

describe("A suite of test for the hello world greet function of the main class", function() {
    let main = new Main();
    let list = ["Jill","Jane"];
    let listMoreThanTwoNames = ["Amy", "Brian", "Charlotte"];
    let listMoreThanTwoNamesWithUpperCase = ["Amy", "CHARLOTTE", "Brian"];
    
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

    it("greet function should return 'Hello, ' + 1st name of list + ' and ' + 2nd name of list + when given a list with 2 name", function() {
        let result = main.greet(list);

        expect(result).toBe("Hello, Jill and Jane.");
    });

    it("greet function should return 'Hello, ..., ..., ... and ...' when given a list with more than 2 names", function() {
        let result = main.greet(listMoreThanTwoNames);

        expect(result).toBe("Hello, Amy, Brian and Charlotte.");
    });

    it("greet function should return 'Hello, Amy and Brian.AND HELLO CHARLOTTE !' when given a 'Amy','Brian','CHARLOTTE'", function() {
        let result = main.greet(listMoreThanTwoNamesWithUpperCase);

        expect(result).toBe("Hello, Amy and Brian.AND HELLO CHARLOTTE !");
    });
});