'use-strict';



/* Utility functions */

function log(name, value) {
  var str = name;
  if (value) {
    str += "=" + value;
  }
  console.log(str);
}

function t(text) {
  document.write(text);
}

function p(text) {
  document.write("<p>" + text + "</p>");
}

function wval(desc, value) {
  document.write("<p><b>" + desc + " =</b> " + value + "</p>");
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
