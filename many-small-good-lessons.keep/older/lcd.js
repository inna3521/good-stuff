"use strict";

const pstart = "<p>";
const pend = "</p>";
const bstart = "<b>";
const bend = "</b>";

/* *******************************/
/*
document.onclick = function(evt) {
  // works without below 2 lines but
  // var evt=window.event || evt; // window.event for IE
  // if (!evt.target) evt.target=evt.srcElement; // extend target property for IE
  alert(evt.target.id); // target is clicked
};
*/
// wireEnterDown("secondval");
// wireEnterDown("computelcd");
function enterDown(elementClicked) {
  let vals = [];
  vals.push(getInputValue("firstval"));
  vals.push(getInputValue("secondval"));
  p(elementClicked);
  for (let i=0; i<vals.length; i++) {
    p(vals[i]);
  }
}
/* ****************************** */

function wireEnterDown(elementId) {
  console.log("wireEnterDown");

  // var elInput = document.getElementById("input-search-term");
  let elInput = document.getElementById(elementId);
  elInput.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      // do nothing
    }
    else {
      if (event.key === "Enter") {
        enterDown();
      }
      else {
        return;
      }
    }
  }, true);

}

function getInputValue(Id) {
  return document.getElementById(Id).value;
}

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
