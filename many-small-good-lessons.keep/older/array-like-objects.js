'use strict';

const pstart = '<p>';
const pend = '</p>';
const bstart = '<b>';
const bend = '</b>';

/********************************/


// How to loop through the 'arguments' function
function printArguments() {
  Array.prototype.forEach.call(arguments, function(item) {
    t(item + ", ");
  });
}
printArguments("a", "b", "c", "d");

// Use Array prototype on string
// note, the space in 'a string' will not print
Array.prototype.forEach.call("a string", function(chr) {
  p(chr);
});

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
