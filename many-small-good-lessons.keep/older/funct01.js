"use strict";

function write(str, num) {
  let out = '<p>';
  if (num == 1) {
    out += '<b>';
  }
  out += str;
  if (num == 1) {
    out += "</b>";
  }
  out += "</p>";

  document.write(out);
}

/* ******************************* */
function map(f,a) {
  let result = [];
  let i;
  write("f = " + f);
  write("a = " + a);
  for (i = 0; i != a.length; i++) {
    result[i] = f(a[i]);
    write(a[i] + "^3 = " + result[i]);
  }
  return result;
}

// 0, 1, 8, 125, 1000
let ret = map(function(x) { return x * x * x;  }, [0, 1, 2, 5, 10]);
write(ret);
