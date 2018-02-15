/* eslint-disable */
"use strict";

const pstart = "<p>";
const pend = "</p>";
const bstart = "<b>";
const bend = "</b>";

/* *******************************/
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function isEven(value)   {
  return value % 2 == 0;
}
var even = arr.filter(isEven);
wval("even", even);

var even2 = arr.filter(function(value) {return value % 2 == 0;});
wval("even2", even2);

var even3 = arr.filter((x) => x % 2 == 0);
wval("even3", even3);
/* ****************************** */

function t(text) {
  document.write(text);
}

function p(text) {
  document.write(pstart + text + pend);
}

function wval(desc, value) {
  /*
  var pstart = "<p>";
  var pend = "</p>";
  var bstart = "<b>";
  var bend = "</b>";
  */
  document.write(pstart + bstart + desc + bend + " = " + value + pend);
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
  var h = document.createElement("h" + val);
  var t = document.createTextNode(text);
  h.appendChild(t);
  document.body.appendChild(h);
}
