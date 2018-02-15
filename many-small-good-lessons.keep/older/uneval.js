'use strict';
/********************************/


let obj = {
  type: 'car',
  brand: 'toyota'
};

write(uneval(obj));



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
