'use strict';

const pstart = '<p>';
const pend = '</p>';
const bstart = '<b>';
const bend = '</b>';

/********************************/
h1("Sets")

var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) p(item);

// I'm here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_Collections





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
