let main = require("../src/app");

describe("A suite of test for the hello world greet function of the main class", function() {
    let list = ["Jill","Jane"];
    let listMoreThanTwoNames = ["Amy", "Brian", "Charlotte"];
    
    test("greet function should return 'Hello, Bob' when given 'Bob'", () => {
        let result = main.greet("Bob");

        expect(result).toBe("Hello, Bob.");
    });

    test("greet function should return 'Hello' + parameter name when given a paramater", () => {
        let result = main.greet("Bob");

        expect(result).toBe("Hello, Bob.");
    });

    test("greet function should return 'Hello, my friend ' when given a NULL", () => {
        let result = main.greet(null);

        expect(result).toBe("Hello, my friend.");
    });

    test("greet function should return 'Hello, my friend ' when given a Undefined", () => {
        let result = main.greet();

        expect(result).toBe("Hello, my friend.");
    });

    test("greet function should return 'Hello, my friend ' when given a void String", () => {
        let result = main.greet("");

        expect(result).toBe("Hello, my friend.");
    });

    test("greet function should return 'HELLO, BOB!' when given 'BOB'", () => {
        let result = main.greet("BOB");

        expect(result).toBe("HELLO, BOB!");
    });

    test("greet function should return 'HELLO' + uppercase parameter when given a parameter in uppercase", () => {
        let result = main.greet("BOB");

        expect(result).toBe("HELLO, BOB!");
    });

    test("greet function should return 'Hello, ' + 1st name of list + ' and ' + 2nd name of list + when given a list wtesth 2 name", () => {
        let result = main.greet(list);

        expect(result).toBe("Hello, Jill and Jane.");
    });

    test("greet function should return 'Hello, ..., ..., ... and ...' when given a list wtesth more than 2 names", () => {
        let result = main.greet(listMoreThanTwoNames);

        expect(result).toBe("Hello, Amy, Brian and Charlotte.");
    });
});