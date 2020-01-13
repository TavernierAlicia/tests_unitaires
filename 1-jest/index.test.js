var mathlib = require('./src/index.js');


describe('sum', function () {
  it('should return 4 when given 2 and 2', function () {
    expect(mathlib.sum(2, 2)).toBe(4);
  });
});

describe('sub', function () {
  it('should return 1 when given 2 and 1', function () {
    expect(mathlib.sub(2, 1)).toBe(1);
  });
});

describe('mult', function () {
  it('should return 25 when given 5 and 5', function () {
    expect(mathlib.mult(5, 5)).toBe(25);
  });
});

describe('divide', function () {
  it('should return 2 when given 10 and 5', function () {
    expect(mathlib.divide(10, 5)).toBe(2);
  });
});

describe('fib', function () {
  it('should return 40 when given 3, 10 and 5', function () {
    expect(mathlib.fib(3, 10, 5)).toBe(40);
  });
});

describe('fact', function () {
  it('should return 30 when given 10 and 3', function () {
    expect(mathlib.fact(10, 3)).toBe(30);
  });
});