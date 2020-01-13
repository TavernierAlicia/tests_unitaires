
var result;

function sum(num1, num2) {
  result = num1 + num2;
  return (result);
}


function sub(num1, num2) {
  result = num1 - num2;
  return (result);
}

function divide(num1, num2) {
  result = num1 / num2;
  return (result);
}

function mult(num1, num2) {
  result = num1 * num2;
  return (result)
}

function fib(num, num1, num2) {
  var a = 1, b = 0, temp;

  while (num >= 0) {
    temp = num1;
    num1 = num1 + num2;
    num2 = temp;
    num--;
  }
  return num2;
}

function fact(num1, num2) {
  result = 1
  for (var i = 1; i <= num1; i++) {
    result = num2 * i;
  }
  return result;
}


module.exports = {
  'sum': sum,
  'sub': sub,
  'divide': divide,
  'mult': mult,
  'fib': fib,
  'fact': fact,
}
