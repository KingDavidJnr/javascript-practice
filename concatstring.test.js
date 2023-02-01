const concatstring = require("./concatString");

test('Returns addition of Str1 and Str2', () => {
    expect(concatstring(5,10)).toBe(15);
});

test("return addition of two strings", () => {
    expect(concatstring(10, 25)).toBe(35);
})

test("return addition of two strings", () => {
    expect(concatstring(6, 20)).toBe(26);
})

test("return addition of two strings", () => {
    expect(concatstring(10, 4)).toBe(14);
})