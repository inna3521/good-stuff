'use strict';
/********************************/

/********************************/

/*
  EDIT THESE FUNCTIONS AT YOUR OWN RISK
*/

function write(str, num) {
  let out = '<p>';
  if (num == 1) {
    out += '<b>';
  }
  out += str;
  if (num == 1) {
    out += '</b>';
  }
  out += '</p>';

  document.write(out);
}



var Inspect = {
    TYPE_FUNCTION: 'function',
    // Returns an array of (the names of) all methods
    methods: function(obj) {
        var testObj = obj || self;
        var methods = [];
        for (prop in testObj) {
            if (typeof testObj[prop] == Inspect.TYPE_FUNCTION && typeof Inspect[prop] != Inspect.TYPE_FUNCTION) {
                methods.push(prop);
            }
        }
        return methods;
    },
    // Returns an array of (the names of) all properties
    properties: function(obj) {
        var testObj = obj || self;
        var properties = [];
        for (prop in testObj) {
            if (typeof testObj[prop] != Inspect.TYPE_FUNCTION && typeof Inspect[prop] != Inspect.TYPE_FUNCTION) {
                properties.push(prop);
            }
        }
        return properties;
    }
}
