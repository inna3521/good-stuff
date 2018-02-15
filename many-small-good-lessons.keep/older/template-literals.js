'use strict';
/* *******************************/

whead("multi-line tempage literals");

var a = 5;
var b = 10;
wvalue('a', a);
wvalue('b', 10);
wvalue('`Fifteen is ${a + b} and\nnot ${2 * a + b}`', `Fifteen is ${a + b} and\nnot ${2 * a + b}.`);

/********************************/
