const { addTwoNumbers, addThreeNumbers, subtractTwoNumbers, subtractThreeNumbers, divideTwoNumbers, multiplyThreeNumbers, findRemainder, toTheThirdPower, toTheXPower, incrementByOne, decrementByOne } = require('./arithmetic-01');

test('addTwoNumbers', () => {
  expect(addTwoNumbers(1, 2)).toBe(3);
})

test('addThreeNumbers', () => {
  expect(addThreeNumbers(1, 2, 3)).toBe(6);
})

test('subtractTwoNumbers', () => {
  expect(subtractTwoNumbers(4, 2)).toBe(2);
})

test('subtractThreeNumbers', () => {
  expect(subtractThreeNumbers(8, 2, 2)).toBe(4)
})

test('divideTwoNumbers', () => {
  expect(divideTwoNumbers(10, 2)).toBe(5)
})

test('multiplyThreeNumbers', () => {
  expect(multiplyThreeNumbers(2, 4, 4)).toBe(32)
})

test('findRemainder', () => {
  expect(findRemainder(5, 2)).toBe(1)
})

test('toTheThirdPower', () => {
  expect(toTheThirdPower(2)).toBe(8)
})

test('toTheXPower', () => {
  expect(toTheXPower(2, 2)).toBe(4)
})

test('incrementByOne', () => {
  expect(incrementByOne(5)).toBe(6)
})

test('decrementByOne', () => {
  expect(decrementByOne(8)).toBe(7)
})
