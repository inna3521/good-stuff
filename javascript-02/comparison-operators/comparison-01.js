function equality(num1, num2) {
  // return true if num1 equals num2, otherwise return false
  return num1 === num2
}

function notEqual(num1, num2) {
  // return ture if num1 is not equal to num2, otherwise return false
  return num1 !== num2
}

function greaterThan(num1, num2) {
  // return true if num1 is greater than num2, otherwise return false
  return num1 > num2
}

function greaterThanOrEqualTo(num1, num2) {
  // return true if num1 is greater than or equal to num2, otherwise return false
  return num1 >= num2
}

function lessThan(num1, num2) {
  // return true if num1 is less than num2, otherwise return false
  return num1 < num2
}

function lessThanOrEqualTo(num1, num2) {
  // return true if num1 is less than or equal to num2, otherwise return false
  return num1 <= num2
}

function findLargestNumber(num1, num2, num3) {
  // return the largest of the 3 parameters
  // Example: 2, 10 & 7 are passed, return 10
  let largest
  if (num1 > num2) {
    largest = num1
  } else {
    largest = num2
  }
  if (largest > num3) {
    // do nothing
  } else {
    largest = num3
  }
  return largest
}

// do not change code below this line

module.exports = { equality, notEqual, greaterThan, greaterThanOrEqualTo, lessThan, lessThanOrEqualTo, findLargestNumber }
