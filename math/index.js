function add (num1, num2) {
  return calculate(num1, num2, '+');
}

function subtract (num1, num2) {
  return calculate(num1, num2, '-');
}

function multiply (num1, num2) {
  return calculate(num1, num2, '*');
}

function divide (num1, num2) {
  return calculate(num1, num2, '/');
}

function calculate(num1, num2, operation) {
  if (isNaN(num1) || isNaN(num2)) {
    return 'Apenas valores numéricos são aceitos.'
  }
  
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 == 0) {
        result = 'Divisão por zero.'
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = 'Operação inválida.'    
  }
  return result;
}

module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
}