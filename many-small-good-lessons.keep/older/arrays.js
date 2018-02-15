'use strict';
/********************************/


h1('Arrays');
var arr = [];
arr['zoo'] = 'monkeys';
console.log(arr.length);
console.log(arr.hasOwnProperty('zoo'));

var arr = ["one", "two", "three"];
console.log(arr.length == arr['length']); // wow that is wierd
h2('array.length');
w('.length is not 0 based');
wval('arr', '["one", "two", "three"]');
wval('arr.length', arr.length);

h2('Iterating over arrays');
var colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
  wval('colors['+ i +']', colors[i]);
}
w('Do the same using forEach');
colors.forEach(function(color) {
  wval('no-key', color);
});
w("Do forEach with an arrow function and 'index'");
colors.forEach((element, index) => {
  wval(index, element);
});
w('Using for..in');
for (var prop in colors) {
  wval('colors[' + prop + ']', colors[prop]);
}

h2('concat()');
var arr = ['1', '2', '3', '4'];
arr = arr.concat('a', 'b', 'c', 'd');
wval('arr', arr);

h2('join(deliminator)');
var arr = ["Wind", "Rain", "Fire"];
var list = arr.join(" - ");
wval('list', list);

h2('slice(start_index, upto-index)')
arr = ["a", "b", "c", "d", "e"];
wval("arr", arr);
arr = arr.slice(1,4);
wval('arr.slice(1,4)', arr);

h2('indexOf(searchElement[, fromIndex])');
var a = ['a', 'b', 'a', 'b', 'a'];
// Starting at index 0
console.log(a.indexOf('b')); // logs 1
// Starting at index 2
console.log(a.indexOf('b', 2)); // logs 3 - I don't get this
console.log(a.indexOf('z')); // logs -1, because 'z' was not found

h2('filter(callback[, thisObject])');
var a1 = ['a', 10, 'b', 20, 'c', 30];
//var a2 = a1.filter(function(item) { return typeof item === 'number'; });
var a2 = a1.filter(item => {return typeof item ==='number';});
wval("a2", a2);



/********************************/
function w(text) {
  document.write(text);
}

function wval(desc, value) {
  var pstart = '<p>';
  var pend = '</p>';
  var bstart = '<b>';
  var bend = '</b>';
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
