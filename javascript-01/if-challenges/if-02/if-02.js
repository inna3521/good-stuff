function getColorCode(color) {
  // Return the word for any number passed in that is between 0 & 5 inclusive
  // If the number is < 0 return 'less than zero'
  // If the number is > 5 return 'greater than five'
  if (color === 'red') {
    return '#FF0000'
  } else if (color === 'green') {
    return '#008000'
  } else if (color === 'blue') {
    return '#0000FF'
  } else if (color === 'orange') {
    return '#FFA500'
  }
}

module.exports = { getColorCode }
