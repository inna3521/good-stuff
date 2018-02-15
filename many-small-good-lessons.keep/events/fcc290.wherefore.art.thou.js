"use strict";

const pstart = "<p>";
const pend = "</p>";
const bstart = "<b>";
const bend = "</b>";

/* *******************************/

/*
[
  {first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
],
*/
/*
 * Global Object
 * hasOwnProperty
 * Object.keys
 *
 */
/*
var ret = whatIsInAName([{first: "Romeo", last: "Montague"},
             {first: "Mercutio", last: null},
             {first: "Tybalt", last: "Capulet"}],
             {last: "Capulet"});
*/
var ret = whatIsInAName(
                         [
                           {"a": 1},
                           {"a": 1},
                           {"a": 1, "b": 2},
                         ],
                         {"a": 1}
                        );
// should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
for (var i = 0; i < ret.length; i++) {
  var obj = ret[i];
  wval("first:last", obj["first"] + ":" + obj["last"]);
}


function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var lookFor = source.last;

  for (var key in collection) {
    if (collection.hasOwnProperty(key)) {
      var obj = collection[key];
      if (obj.hasOwnProperty("last")) {
        if (obj.last == lookFor) {
          arr.push(obj);
        }
      }
    }
  }
  // Only change code above this line
  return arr;
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
