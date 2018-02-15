"use strict";

const pstart = "<p>";
const pend = "</p>";
const bstart = "<b>";
const bend = "</b>";

/* *******************************/
function enterDownEvent() {
  p(this.id);
}
function wireEvents() {
  let el = document.getElementById("firstVal");
  log(el.id);
  // wireEnterDown(document.getElementById("firstVal"));
  // wireEnterDown(getElement("secondval"));
  // wireEnterDown(getElement("computelcd"));
}
wireEvents();
/*
(function() {
  "use strict";

  wireEvents();
}());
*/

function wireEnterDown(element) {
  log("wireEnterDown");
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
function log(desc, value) {
  let msg = desc + "=" + value;
  console.log(msg);
}
function getElement(elementId) {
  log(getElement);
  log("elementId", elementId);
  return document.getElementById(elementId);
}

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
