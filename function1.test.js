const timesTwo = require('./function1');

// Write the first test
test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20);
});