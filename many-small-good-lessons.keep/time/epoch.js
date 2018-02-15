"use strict";
/* eslint-disable */

const pstart = "<p>";
const pend = "</p>";
const bstart = "<b>";
const bend = "</b>";

/* *******************************/

/*
1482626100
1482609600
1482696000
1482782400
1482868800
1482955200
1483041600
1483128000


1482626100 Sun  25 Dec 2016 00:35:00 +0000
*/

var testData = [
  {epoch: 1482609600, dayName: "Sat", dayOfMonth: 24, monthName: "Dec", year: 2016},
  {epoch: 1482626100, dayName: "Sun", dayOfMonth: 25, monthName: "Dec", year: 2016},
  {epoch: 1482696000, dayName: "Sun", dayOfMonth: 25, monthName: "Dec", year: 2016},
  {epoch: 1482782400, dayName: "Mon", dayOfMonth: 26, monthName: "Dec", year: 2016},
  {epoch: 1482868800, dayName: "Tue", dayOfMonth: 27, monthName: "Dec", year: 2016},
  {epoch: 1482955200, dayName: "Wed", dayOfMonth: 28, monthName: "Dec", year: 2016},
  {epoch: 1483041600, dayName: "Thu", dayOfMonth: 29, monthName: "Dec", year: 2016},
  {epoch: 1483128000, dayName: "Fri", dayOfMonth: 30, monthName: "Dec", year: 2016}
];
/*
 theDay();
function theDay() {
  let d = new Date(0)
  d.setUTCSeconds(1482609600);
  console.log(d);
  console.log(d.getDay());
}
*/
console.log("hi");

runIt();

function runIt() {
  for (var i=0; i<testData.length; i++) {
    log("********************************************************")
    try {
      var testDate = testData[i];
      var epoch = testDate.epoch;
      var d = new Date(0);
      d.setUTCSeconds(epoch);
      var testNum = i;
      testDate.dayName === getDayName(d) ? logResult(testNum, "success", getDayName(d)) : logResult(testNum, "fail", getDayName(d));
      testDate.monthName === getMonthName(d) ? logResult(testNum, "success", getMonthName(d)) : logResult(testNum, "fail", getMonthName(d));
      testDate.dayOfMonth === d.getDate() ? logResult(testNum, "success", d.getDate()) : logResult(testNum, "fail", d.getDate());
      log("testDate.day", testDate.dayOfMonth);
      log("d.getDate", d.getDate());
      var num1 = testDate.dayOfMonth;
      var num2 = d.getDate();
      log("num1=" + num1);
      log("num2=" + num2);
      if (num1 === num2) {
        log("true");
      } else {
        log("false");
      }
      testDate.year === d.getFullYear() ? logResult(testNum, "success", d.getFullYear()) : logResult(testNum, "fail", d.getFullYear());
    }
    catch (e) {
      e.message;
    }
  }
  console.log("hi");
}

function getMonthName(date) {
  let num = date.getMonth();
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[num];
}

function getDayName(date) {
  let num = date.getDay();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  return days[num];
}

/*
 * success: t/f the test passed or failed
*/
function logResult(testNumber, success, message) {
  if (success) {
    console.log("test=" + testNumber + " resutl=success message=" + message);
  } else {
    console.error("test=" + testNumber + " resutl=fail message=" + message);
  }
}

function log(name, value) {
  var str = name;
  if (value) {
    str += "=" + value;
  }
  console.log(str);
}

/* ****************************** */

function t(text) {
  document.write(text);
}

function p(text) {
  document.write(pstart + text + pend);
}

function wval(desc, value) {
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

/*
var epoch = "1482609600";
var d = new Date(0);
console.log(d);
d.setUTCSeconds(epoch);
console.log(d);
var local = d.toLocaleDateString();
console.log(local);
formatDate(d);


function formatDate01(date) {
  let monthNum = date.getMonth();
  let day = date.getDay();
  let year = date.getFullYear();
  console.log(year);
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let month = months[monthNum];
  let ret = month + " " + day + ", " + year;
  console.log(ret);
  return ret;
}
*/
/*
function formatDate02(epoch) {
  try {
    let d = new Date(0);
    d.setUTCSeconds(epoch);
  }
  catch (e) {
    console.error(e.message);
  }
}
*/
