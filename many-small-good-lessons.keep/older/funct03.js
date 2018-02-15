'use strict';
/********************************/



function factorial(n) {
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
}

let values = [1, 2, 3, 4, 5];
write('values.length = ' + values.length);

for (let i = 0; i < values.length; i++) {
  write('i = ' + i);
  write('factorial(' + values[i] +') = ' + factorial(values[i]));
}



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
