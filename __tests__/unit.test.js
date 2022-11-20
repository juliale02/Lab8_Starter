// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
// TODO - Part 2

test('check phone: 1', () => {
    expect(functions.isPhoneNumber(1)).toBe(false);
  });
test('check phone: 2 ', () => {
    expect(functions.isPhoneNumber(2)).toBe(false);
});
test('check phone: (123)-(456)-(7891)', () => {
    expect(functions.isPhoneNumber("123-456-7891")).toBe(true);
});
test('check phone: (223)-(456)-(7891)', () => {
    expect(functions.isPhoneNumber("223-456-7891")).toBe(true);
  });


test('check email: 1', () => {
    expect(functions.isEmail(1)).toBe(false);
  });
test('check email: 2', () => {
    expect(functions.isEmail(2)).toBe(false);
});
test('check email: juliale@gmail.com', () => {
    expect(functions.isEmail("juliale@gmail.com")).toBe(true);
});
test('check email: juliale@yahoo.com', () => {
    expect(functions.isEmail("juliale@yahoo.com")).toBe(true);
});

test('check pass: 1', () => {
    expect(functions.isStrongPassword(1)).toBe(false);
  });
test('check pass: 2', () => {
    expect(functions.isStrongPassword(2)).toBe(false);
});
test('check pass: julialegmail', () => {
    expect(functions.isStrongPassword("julialegmail")).toBe(true);
});
test('check pass: julialeyahoo', () => {
    expect(functions.isStrongPassword("julialeyahoo")).toBe(true);
});


test('check date: 1', () => {
    expect(functions.isDate(1)).toBe(false);
  });
test('check date: 2', () => {
    expect(functions.isDate(2)).toBe(false);
});
test('check date: 00/00/0000', () => {
    expect(functions.isDate("00/00/0000")).toBe(true);
});
test('check date: 1/1/1111', () => {
    expect(functions.isDate("1/1/1111")).toBe(true);
});

test('check color: 1', () => {   
    expect(functions.isHexColor(1)).toBe(false);
});
test('check color: 2', () => {
  expect(functions.isHexColor(2)).toBe(false);
});
test('check color: 123', () => {
  expect(functions.isHexColor(123)).toBe(true);
});
test('check color: 234', () => {
  expect(functions.isHexColor(234)).toBe(true);
});
