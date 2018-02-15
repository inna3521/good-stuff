"use strict";

const pstart = "<p>";
const pend = "</p>";
const bstart = "<b>";
const bend = "</b>";

/* *******************************/
/*
const one = "I";
const five = "V";
const ten = "X";
const fifty = "L";
const hundred = "C";
const fiveHundred = "D";
const thousand = "M";
// Subtractors
const four = "IV";
const nine = "IX";
const forty = "XL";
const ninty = "XC";
const fourHundred = "CD";
const nineHundred = "CM";
*/

testVal(362, "CCCLXII");
testVal(500, "D");
testVal(501, "DI");
testVal(1000, "M");
testVal(1004, "MIV");
testVal(1006, "MVI");
testVal(1023, "MXXIII");
testVal(2014, "MMXIV");

function testVal(arabic, roman) {
  var val = toRomanNumber(arabic);
  var result = boolTest(val, roman);

  p("test: " + arabic + " = " + roman + " result: " + result + " returned = " + val);
}

function boolTest(param1, param2) {
  var ret;
  if (param1 === param2) {
    ret = "<span style='color: green;'>Pass</span>";
  } else {
    ret = "<span style='color: red;'>Fail</span>";
  }
  return ret;
}

function toRomanNumber(arabicNumber) {
  // Number groupings
  var numOfOnes;
  var numOfTens;
  var numOfHundreds;
  var numOfThousands;

  var romanOnes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var romanTens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var romanHundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var romanThousands = ["M", "MM", "MMM"];

  var numReversed = arabicNumber.toString().split("").reverse();
  var numReversedLen = numReversed.length;
  // var reversed = "abc".split("").reverse();
  // wval("arabic", arabicNumber);
  // wval("numReversed", numReversed);
  for (var i = 0; i < numReversedLen; i++) {
    switch (i) {
      case 0:
        numOfOnes = numReversed[i];
        // wval("nOnes", numOfOnes);
        break;
      case 1:
        numOfTens = numReversed[i];
        // wval("nTens", numOfTens);
        break;
      case 2:
        numOfHundreds = numReversed[i];
        // wval("nHundreds", numOfHundreds);
        break;
      case 3:
        numOfThousands = numReversed[i];
        // wval("nThousands", numOfThousands);
        break;
      default:
    } // end switch
  } // end for
  // Ones
  var ones = romanOnes[numOfOnes - 1];
  // wval("ones", ones);
  // p(typeof ones);
  var tens = romanTens[numOfTens - 1];
  // wval("tens", tens);
  // p(typeof tens);
  var hundreds = romanHundreds[numOfHundreds - 1];
  // wval("hundreds", hundreds);
  // p(typeof hundreds);
  var thousands = romanThousands[numOfThousands - 1];
  // wval("thousands", thousands);
  // p(typeof thousands === "undefined");

  var ret = "";
  if (typeof thousands != "undefined") {
    ret += thousands;
    wval("thousands", thousands);
  }
  if (typeof hundreds != "undefined") {
    ret += hundreds;
    wval("hundreds", hundreds);
  }
  if (typeof tens != "undefined") {
    ret += tens;
    wval("tens", tens);
  }
  if (typeof ones != "undefined") {
    ret += ones;
    wval("ones", ones);
  }
  return ret;

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
