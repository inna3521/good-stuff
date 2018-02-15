'use strict';
/* eslint-disable */
/********************************/


wValue('helo', 'thevalue');
//new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);

var xmas95 = new Date("December 25, 1995");
wValue('xmas95', xmas95);
var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999);
wValue(endYear, endYear);
endYear.setFullYear(today.getFullYear());
wValue('endYear', endYear);
var msPerDay = 24 * 60 * 60 * 1000;
wValue('msPerDay', msPerDay);
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
wValue('daysLeft', daysLeft);
var daysLeft = Math.round(daysLeft);
wValue('daysLeft', daysLeft);


wValue('parseDate', Date.parse("Aug 9, 1995"));
var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
wValue('IPODate', IPOdate);


function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = "" + ((hour > 12) ? hour - 12 : hour);
  wValue('temp', temp);
  if (hour == 0)
    temp = "12";
  temp += ((minute < 10) ? ":0" : ":") + minute;
  temp += ((second < 10) ? ":0" : ":") + second;
  temp += (hour >= 12) ? " P.M." : " A.M.";
  return temp;
}
wValue('JSClock', JSClock());

/********************************/


function wValue(desc, value) {
  var pstart = '<p>';
  var pend = '</p>';
  var bstart = '<b>';
  var bend = '</b>';
  document.write(pstart + bstart + desc + bend + ' = ' + value + pend);
}
