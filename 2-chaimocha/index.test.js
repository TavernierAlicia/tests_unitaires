var mathlib = require('./src/index.js');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('sum', function () {
  it('should return 4 when given 2 and 2', function () {
    assert.Equal(mathlib.sum(2, 2), 4);
  });
});

describe('sub', function () {
  it('should return 1 when given 2 and 1', function () {
    assert.Equal(mathlib.sub(2, 1), 1);
  });
});

describe('mult', function () {
  it('should return 25 when given 5 and 5', function () {
    assert.Equal(mathlib.mult(5, 5), 25);
  });
});

describe('divide', function () {
  it('should return 2 when given 10 and 5', function () {
    assert.Equal(mathlib.divide(10, 5), 2);
  });
});

describe('fib', function () {
  it('should return 40 when given 3, 10 and 5', function () {
    assert.Equal(mathlib.fib(3, 10, 5), 40);
  });
});

describe('fact', function () {
  it('should return 30 when given 10 and 3', function () {
    assert.Equal(mathlib.fact(10, 3), 30);
  });
});