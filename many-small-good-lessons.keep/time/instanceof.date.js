"use strict";

const pstart = "<p>";
const pend = "</p>";
const bstart = "<b>";
const bend = "</b>";

/* *******************************/
encloseIt();
function encloseIt() {
  let epochs = [
    1482769558,
    1482626100,
    1482609600,
    1482696000,
    1482782400,
    1482868800,
    1482955200,
    1483041600,
    1483128000,
  ];
  for (let i=0; i<epochs.length; i++) {
    let epoch = epochs[i];
    let date = new Date(0);
    date.setUTCSeconds(epoch);
    // p(epoch);
    h2(date);
    p(getDayName(epoch));
    p(getDayName(date));
  }
}

function getDayName(date) {
  let d;
  let DDD = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  if (!(date instanceof Date)) {
    // Assume it is an epoch
    d = new Date(0);
    d.setUTCSeconds(date);
  } else {
    d = date;
  }
  let num = d.getDay();
  return DDD[num];
}
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
