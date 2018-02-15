"use strict";

const pstart = "<p>";
const pend = "</p>";
const bstart = "<b>";
const bend = "</b>";

/* *******************************/
var createPet = function(name) {
  var sex;

  return {
    setName: function(newName) {
      name = newName;
    },
    getName: function() {
      return name;
    },
    getSex: function() {
      return sex;
    },
    setSex: function(newSex) {
      if(typeof newSex === "string" && (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet("Vivie");
p(pet.getName());
pet.setName("Oliver");
pet.setSex("male");
p(pet.getName() + " is " + pet.getSex());

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
