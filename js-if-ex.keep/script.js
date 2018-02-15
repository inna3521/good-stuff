
p(knownNumber(30))

function knownNumber(num) {
  if (num === 10) {
    return '10 is recognized'
  } else if (num === 20) {
    return '20 is recognized'
  } else if (num === 30) {
    return '30 is recognized'
  } else {
    return 'do not know that number'
  }
}




p(isItGreen('orange'))
function isItGreen(val) {
  if (val === 'green') {
    return 'yes'
  } else {
    return 'no'
  }
}

p(whichIsGreater(5, 7))
function whichIsGreater(val1, val2) {
  if (val1 > val2) {
    return `${val1} is greater than ${val2}`
  } else {
    return `${val2} is greater than ${val1}`
  }
}

p(isItGreenOrBlue('green'))
function isItGreenOrBlue(val) {
  if (val === 'green') {
    return 'yes, it is green'
  } else if (val === 'blue') {
    return 'yes, it is blue'
  } else {
    return "it isn't green nor blue"
  }
}

p(multiplyOrDivide('!', 8, 2))
function multiplyOrDivide(operation, num1, num2) {
  if (operation === '*') {
    return `${num1} * ${num2} = ${ num1 * num2}`
  } else if (operation === '/') {
    return `${num1} / ${num2} = ${ num1 / num2}`
  } else {
    let err = 'ERROR: invalid operation'
    e(err)
    return -1
  }
}


pColor('make this green', 'green-text')
pColor('make this blue', 'blue-text')
pColor('no color for me')

function p(text) {
  // document.write(`<p class="${class}">${text}</p>`)
  document.write(`<p>${text}</p>`)
  // document.write(text)
}

function pColor(text, cssClass = 'none') {
  if (cssClass === 'none') {
    document.write(`<p>${text}</p>`)
  } else {
    document.write(`<p class="${cssClass}">${text}</p>`)
  }
}


/* BUG BUG */
pColor2('make this green', 'green')
pColor2('make this blue', 'blue')
pColor2('make this orange', 'orange')
pColor2('no color for me')

function pColor2(text, cssClass = 'none') {
  if (cssClass === 'none') {
    document.write(`<p>${text}</p>`)
  } else if (cssClass === 'blue') {
    document.write(`<p class="blue-text">${text}</p>`)
  } else if (cssClass === 'green') {
    document.write(`<p class="green-text">${text}</p>`)
  }
}

pColor3('make this green', 'green')
pColor3('make this blue', 'blue')
pColor3('no color for me')

function pColor3(text, cssClass = 'none') {
  if (cssClass === 'blue') {
    document.write(`<p class="blue-text">${text} color</p>`)
  } else if (cssClass === 'green') {
    document.write(`<p class="green-text">${text} color</p>`)
  } else {
    document.write(`<p>${text}</p>`)
  }
}



function e(text) {
  document.write(`<p class="error-message">${text}</p>`)
}
