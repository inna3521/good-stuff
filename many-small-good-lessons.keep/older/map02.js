'use strict';

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

/* *******************************/

let m1 = new Map();
m1.set(0, 'zero');
m1.set(1, 'one');
for (let [key, value] of m1) {
  write(key + " = " + value);
}

write('Keys', 1);
for (let key of m1.keys()) {
  write(key);
}

write('Values', 1);
for (let value of m1.values()) {
  write(value);
}

write('Using forEach()', 1)
m1.forEach(function(value, key) {
  write(key + "= " + value);
}, m1)

let kva = [["key1", "value1"], ["key2", "value2"]];
let m2 = new Map(kva);

write('<b>m2.get("key1") = </b>' + m2.get("key1"))

write('Spread operator', 1);
write(uneval([...m2]));

write('Spread operator on keys', 1);
write(uneval([...m2.keys()]));

write('Spread operator on values', 1);
write(uneval([...m2.values()]));
