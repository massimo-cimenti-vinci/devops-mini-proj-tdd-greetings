
const main = require('../src/app');

describe('A suite of test for the hello world greet function of the main class', function () {
  const list = ['Jill', 'Jane'];
  const listMoreThanTwoNames = ['Amy', 'Brian', 'Charlotte'];

  test("greet function should return 'Hello, Bob' when given 'Bob'", () => {
    const result = main.greet('Bob');

    expect(result).toBe('Hello, Bob.');
  });

  test("greet function should return 'Hello' + parameter name when given a paramater", () => {
    const result = main.greet('Bob');

    expect(result).toBe('Hello, Bob.');
  });

  test("greet function should return 'Hello, my friend ' when given a NULL", () => {
    const result = main.greet(null);

    expect(result).toBe('Hello, my friend.');
  });

  test("greet function should return 'Hello, my friend ' when given a Undefined", () => {
    const result = main.greet();

    expect(result).toBe('Hello, my friend.');
  });

  test("greet function should return 'Hello, my friend ' when given a void String", () => {
    const result = main.greet('');

    expect(result).toBe('Hello, my friend.');
  });

  test("greet function should return 'HELLO, BOB!' when given 'BOB'", () => {
    const result = main.greet('BOB');

    expect(result).toBe('HELLO, BOB!');
  });

  test("greet function should return 'HELLO' + uppercase parameter when given a parameter in uppercase", () => {
    const result = main.greet('BOB');

    expect(result).toBe('HELLO, BOB!');
  });

  test("greet function should return 'Hello, ' + 1st name of list + ' and ' + 2nd name of list + when given a list wtesth 2 name", () => {
    const result = main.greet(list);

    expect(result).toBe('Hello, Jill and Jane.');
  });
  test("greet function should return 'Hello, ..., ..., ... and ...' when given a list wtesth more than 2 names", () => {
    const result = main.greet(listMoreThanTwoNames);

    expect(result).toBe('Hello, Amy, Brian and Charlotte.');
  });
});
