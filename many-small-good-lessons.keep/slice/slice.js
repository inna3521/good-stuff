/* eslint-disable */
"use strict";

const pstart = "<p>";
const pend = "</p>";
const bstart = "<b>";
const bend = "</b>";

/* *******************************/

// Example 1
h1("Example 1");
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
wval ("cirtus", citrus);

// Example 2
h1("Example 2");
// Using slice, create newCar from myCar.
var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
var newCar = myCar.slice(0, 2);

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
p('myCar = ' + myCar.toSource());
p('newCar = ' + newCar.toSource());
p('myCar[0].color = ' + myCar[0].color);
p('newCar[0].color = ' + newCar[0].color);

// Change the color of myHonda.
myHonda.color = 'purple';
p('The new color of my Honda is ' + myHonda.color);

// Display the color of myHonda referenced from both arrays.
p('myCar[0].color = ' + myCar[0].color);
p('newCar[0].color = ' + newCar[0].color);

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
