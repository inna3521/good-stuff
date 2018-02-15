"use strict";
/* *******************************/

// ({2},1) => v + 1

let a = 1;
a => a + 1;
write("a = " + a);

// Doesn't work
function returnValue(x) {
  x = 0;
  return x => x + 2;
}
let b = returnValue(a);
write(b);
/* *******************************/
function write(str, num) {
  let out = "<p>";
  if (num == 1) {
    out += "<b>";
  }
  out += str;
  if (num == 1) {
    out += "</b>";
  }
  out += "</p>";

  document.write(out);
}
