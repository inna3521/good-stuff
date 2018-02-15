'use strict';

function write(str) {
  document.write('<p>' + str + '</p>');
}

/********************************/


var myMap = new Map();
var keyString = 'a string';
var keyObj = {};
var keyFunc = function () {};
var a = 'karl is here';


myMap.set(keyString, "value assoc with 'a string'");
myMap.set(keyObj, 'value assoc with keyObj');
myMap.set(keyFunc, 'value assoc with keyFuc');
myMap.set(a, 'hi karl');

write('map.size = ' + myMap.size);
write(myMap.get("a string"));
write(myMap.get('karl is here'));

