function addTwoNumbers(num1, num2) {
  // return the sum of the parameters
  return num1 + num2
}

function addThreeNumbers(num1, num2, num3) {
  // return the sum of the parameters
  return num1 + num2 + num3
}

function subtractTwoNumbers(num1, num2) {
  // Return the difference
  return num1 - num2
}

function subtractThreeNumbers(num1, num2, num3) {
  // Return the difference of the 3 parameters
  return num1 - num2 - num3
}

function divideTwoNumbers(num1, num2) {
  // Return the quotient of the two parameters
  return num1 / num2
}

function multiplyThreeNumbers(num1, num2, num3) {
  // Return the product of the parameters
  return num1 * num2 * num3
}

function findRemainder(num1, num2) {
  // Return the remainder of the two parameters
  return num1 % num2
}

function toTheThirdPower(num) {
  // Return the result of the parameter raised to the third power
  return num**3
}

function incrementByOne(num) {
  // There is an operator that will increase any number by 1. Use it to return the number passed in pluse 1

  return ++num
}

function decrementByOne(num) {
  // There is an operator that will decrease any number by 1. Use it to return the number passed in minus 1
  return --num
}

// Bonus
function toTheXPower(num, exponent) {
  // Return the result of 'num' rasied to the value of 'exponent'
  return num**exponent
}

module.exports = { addTwoNumbers, addThreeNumbers, subtractTwoNumbers, subtractThreeNumbers, divideTwoNumbers, multiplyThreeNumbers, findRemainder, toTheThirdPower, toTheXPower, incrementByOne, decrementByOne }
