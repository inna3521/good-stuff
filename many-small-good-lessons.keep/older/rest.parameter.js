'use strict';
/********************************/

function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
write(arr); // [2, 4, 6]

// a little play with 'map'
var a1 = [1, 2, 3, 4];
var v1 = a1.map(x => x);
write(v1);
v1 = a1.map(x => x * b);
write(v1);


/********************************/
function write(str, num) {
  let out = '<p>';
  if (num == 1) {
    out += '<b>';
  }
  out += str;
  if (num == 1) {
    out += '</b>';
  }
  out += '</p>';

  document.write(out);
}
