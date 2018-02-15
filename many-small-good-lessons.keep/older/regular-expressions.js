"use strict";
/* *******************************/

/* *******************************/
function w(text) {
  document.write(text);
}

function wvalue(desc, value) {
  var pstart = "<p>";
  var pend = "</p>";
  var bstart = "<b>";
  var bend = "</b>";
  document.write(pstart + bstart + desc + bend + " = " + value + pend);
}

function whead(text, level) {
  var val = level ? level : 1;
  var h = document.createElement("h" + val);
  var t = document.createTextNode(text);
  h.appendChild(t);
  document.body.appendChild(h);
}
