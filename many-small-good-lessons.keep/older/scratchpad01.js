'use strict';

function write(str) {
  document.write('<p>' + str + '</p>');
}

/********************************/


var myMap = new Map();
var keyString = 'a string';
var keyObj = {};
var keyFunc = function () {};


myMap.set(keyString, "value assoc with 'a string'");
myMap.set(keyObj, 'value assoc with keyObj');
myMap.set(keyFunc, 'value assoc with keyFuc');
write('map.size = ' + myMap.size);
