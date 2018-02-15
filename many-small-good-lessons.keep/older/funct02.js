"use strict";
/********************************/

// Works!
write(square(5));
function square(n) { return n*n}

// Undefined!
let square2;
// write(square2(7)); // doesn't work, code execution stops, funct not hoisted
square2 = function(n) {
  return n * n;
}
write(square2(7)); // works! Function is above

/********************************/
function write(str, num) {
  let out = '<p>';
  if (num == 1) {
    out += '<b>';
  }
  out += str;
  if (num == 1) {
    out += '</b>'
  }
  out += '</p>';

  document.write(out);
}
