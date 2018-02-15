"use strict";

const pstart = "<p>";
const pend = "</p>";
const bstart = "<b>";
const bend = "</b>";


/* *******************************/
runIt();

function runIt() {
  let testValues = [101.25, 230.87, 10, 198.99];
  for (let i=0; i<testValues.length; i++) {
    getWindDirection(testValues[i]);
  }
}

function getWindDirection(degree) {
  let windValues = [
    {cardinal:"ESE", startDeg:101.25, endDeg:123.75},
    {cardinal:"NNE", startDeg:11.25, endDeg:33.75},
    {cardinal:"SE", startDeg:123.75, endDeg:146.25},
    {cardinal:"SSE", startDeg:146.25, endDeg:168.75},
    {cardinal:"S", startDeg:168.75, endDeg:191.25},
    {cardinal:"SSW", startDeg:191.25, endDeg:213.75},
    {cardinal:"SW", startDeg:213.75, endDeg:236.25},
    {cardinal:"WSW", startDeg:236.25, endDeg:258.75},
    {cardinal:"W", startDeg:258.75, endDeg:281.25},
    {cardinal:"WNW", startDeg:281.25, endDeg:303.75},
    {cardinal:"NW", startDeg:303.75, endDeg:326.25},
    {cardinal:"NNW", startDeg:326.25, endDeg:348.75},
    {cardinal:"NE", startDeg:33.75, endDeg:56.25},
    {cardinal:"N", startDeg:348.75, endDeg:11.25},
    {cardinal:"ENE", startDeg:56.25, endDeg:78.75},
    {cardinal:"E", startDeg:78.75, endDeg:101.25},
  ];

  let newValue = windValues.map((obj, i) => {

    if (degree >= obj.startDeg && degree <= obj.endDeg) {
      console.log("degree " + degree + " is " + obj.cardinal);
    }
  }
  );

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
