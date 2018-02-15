const { getColorCode } = require('../if-02/if-02');

test('getColorCode', () => {
  expect(getColorCode('red')).toBe('#FF0000');
  expect(getColorCode('green')).toBe('#008000');
  expect(getColorCode('blue')).toBe('#0000FF');
  expect(getColorCode('orange')).toBe('#FFA500');
})
