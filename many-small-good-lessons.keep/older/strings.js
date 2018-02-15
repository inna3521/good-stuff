'use strict';
/********************************/

let s1 = new String('hello');
wValue(s1);
console.log(s1);
document.write  (uneval(s1));

var s = new String("foo"); // Creates a String object
console.log(s); // Displays: { '0': 'f', '1': 'o', '2': 'o'}

// just use the string literal
wHead('Print out string');
for (var i=0; i<s1.length; i++) {
  wValue('s1[' + i +']', s1[i]);
}

/********************************/

function wValue(desc, value) {
  var pstart = '<p>';
  var pend = '</p>';
  var bstart = '<b>';
  var bend = '</b>';
  document.write(pstart + bstart + desc + bend + ' = ' + value + pend);
}

function wHead(heading, level) {
  if (level === 1 || level) {
    '<h1>' + heading + '<h1>';
  }
}
