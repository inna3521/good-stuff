"use strict";

const pstart = "<p>";
const pend = "</p>";
const bstart = "<b>";
const bend = "</b>";

/* *******************************/
/*
function tryIt() {
  let ele = document.getElementById("secondval");
  log("ele.id", ele.id);
}
tryIt();
*/


function enterDownEvent() {
  p(this.id);
}
function wireEvents() {
  // let el = document.getElementById("firstval");
  // log("el.id", el.id);
  wireEnterDown(getElement("firstval"));
  // wireEnterDown(getElement("secondval"));
  // wireEnterDown(getElement("computelcd"));
}
// wireEvents();

(function() {
  "use strict";

  wireEvents();
}());


function wireEnterDown(element) {
  log("wireEnterDown()");
  element.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      // do nothing
    }
    else {
      if (event.key === "Enter") {
        // enterDownEvent();
        p(this.id);
      }
      else {
        return;
      }
    }
  }, true);
}

function getInputValue(elementId) {
  return document.getElementById(elementId).value;
}

/* ****************************** */
function getElement(elementId) {
  log("getElement()");
  log("elementId", elementId);
  return document.getElementById(elementId);
}

function log(desc, value) {
  let msg;
  if (typeof value == "undefined") {
    msg = desc;
  }
  else {
    msg = desc + "=" + value;
  }
  console.log(msg);
}

function t(text) {
  document.write(text);
}

function p(text) {
  let txt = document.createTextNode(text);
  let p = document.createElement("p");
  document.body.appendChild(p);
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
