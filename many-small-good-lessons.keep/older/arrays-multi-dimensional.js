'use strict';

const pstart = '<p>';
const pend = '</p>';
const bstart = '<b>';
const bend = '</b>';
/********************************/

// Create 2 dimentional array
var a = new Array(4);
for (let i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (let j = 0; j < 4; j++) {
    a[i][j] = "[" + i + "," + j + "]"
  }
}
// Print it
let row = new Array(4, 4);
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    //t(a[i][j]);
    row[i,j] = a[i][j];
  }
  p(row);
}




/********************************/
function t(text) {
  document.write(text);
}

function p(text) {
  document.write(pstart + text + pend);
}

function wval(desc, value) {
  /*
  var pstart = '<p>';
  var pend = '</p>';
  var bstart = '<b>';
  var bend = '</b>';
  */
  document.write(pstart + bstart + desc + bend + ' = ' + value + pend);
}

function h1(text) {
  whead(text, 1);
}

function h2(text) {
  whead(text, 2);
}

function h3(text) {
  whead(text, 3);
}

function h4(text) {
  whead(text, 4);
}

function whead(text, level) {
  var val = level ? level : 1;
  var h = document.createElement('h' + val);
  var t = document.createTextNode(text);
  h.appendChild(t);
  document.body.appendChild(h);
}
