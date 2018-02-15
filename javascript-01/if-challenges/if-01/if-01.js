function wordForNumber(num) {
  // Return the word for any number passed in that is between 0 & 5 inclusive
  // If the number is < 0 return 'less than zero'
  // If the number is > 5 return 'greater than five'
  if (num === 0) {
    return 'zero'
  } else if (num === 1) {
    return 'one'
  } else if (num === 2) {
    return 'two'
  } else if (num === 3) {
    return 'three'
  } else if (num === 4) {
    return 'four'
  } else if (num === 5) {
    return 'five'
  } else if (num < 0 ) {
    return 'less than zero'
  } else if (num > 5) {
    return 'greater than five'
  }
}


// function addTwoNumbers(num1, num2) {
//   // return the sum of the parameters
//   return num1 + num2
// }

module.exports = { wordForNumber }
