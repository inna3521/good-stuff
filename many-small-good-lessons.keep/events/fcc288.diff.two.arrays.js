"use strict";

const pstart = "<p>";
const pend = "</p>";
const bstart = "<b>";
const bend = "</b>";

/* *******************************/
var a1 = [1, 2, 3, 5];
var a2 = [1, 2, 3, 4, 5];
print1DArray("a1", a1);
print1DArray("a2", a2);

diffArrays(a1, a2);
function diffArrays(arr1, arr2) {
  var val;
  var arrNew = [];
  var i;
  // values in arr1 but not arr2
  for (i = 0; i < arr1.length; i++) {
    val = arr1[i];
    if (arr2.indexOf(val) === -1) {
      arrNew.push(val);
    }
  }

  // values in arr2 but not in arr1 or arrNew
  for (i = 0; i < arr2.length; i++) {
    val = arr2[i];
    if (arr1.indexOf(val) === -1 && arrNew.indexOf(val) === -1) {
      arrNew.push(val);
    }
  }
  print1DArray("arrNew", arrNew);
}
wval("mod", 3.6 % 10);
/* ****************************** */

function t(text) {
  document.write(text);
}

function print1DArray(arrayName, array) {
  var str = arrayName + " = [";
  for (var i = 0; i < array.length; i++) {
    str += array[i];
    if (i < array.length - 1) {
      str += ", ";
    }
  }
  str += "]";
  document.write(str + "<br>");
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
