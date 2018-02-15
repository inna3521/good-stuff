const { equality, notEqual, greaterThan, greaterThanOrEqualTo, lessThan, lessThanOrEqualTo, findLargestNumber } = require('../comparison-01');

test('equality', () => {
  expect(equality(1, 2)).toBe(false);
  expect(equality(2, 2)).toBe(true);
  expect(equality(2, "2")).toBe(false);
})

test('notEqual', () => {
  expect(notEqual(1, 2)).toBe(true);
  expect(notEqual(2, 2)).toBe(false);
  expect(notEqual(2, "2")).toBe(true);
})

test('greaterThan', () => {
  expect(greaterThan(4, 2)).toBe(true);
  expect(greaterThan(1, 2)).toBe(false);
})

test('greaterThanOrEqualTo', () => {
  expect(greaterThanOrEqualTo(8, 2)).toBe(true)
  expect(greaterThanOrEqualTo(2, 8)).toBe(false)
})

test('lessThan', () => {
  expect(lessThan(10, 2)).toBe(false)
  expect(lessThan(2, 10)).toBe(true)
})

test('lessThanOrEqualTo', () => {
  expect(lessThanOrEqualTo(10, 2)).toBe(false)
  expect(lessThanOrEqualTo(2, 10)).toBe(true)
})

test('findLargestNumber', () => {
  expect(findLargestNumber(10, 2, 5)).toBe(10)
  expect(findLargestNumber(2, 10, 15)).toBe(15)
})
