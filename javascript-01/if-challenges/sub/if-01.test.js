const { wordForNumber } = require('../if-01/if-01');

test('wordForNumber', () => {
  expect(wordForNumber(0)).toBe('zero');
  expect(wordForNumber(1)).toBe('one');
  expect(wordForNumber(2)).toBe('two');
  expect(wordForNumber(3)).toBe('three');
  expect(wordForNumber(4)).toBe('four');
  expect(wordForNumber(5)).toBe('five');
  expect(wordForNumber(6)).toBe('greater than five');
  expect(wordForNumber(-1)).toBe('less than zero');
})
