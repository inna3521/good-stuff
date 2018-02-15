'use strict';
/********************************/

var kvArray = [["key1", "value1"], ["key2", "value2"]];

// Use the regular Map constructor to transform a 2D key-value Array into a map
var myMap = new Map(kvArray);

myMap.get("key1"); // returns "value1"

// Use the spread operator to transform a map into a 2D key-value Array.
write(uneval([...myMap])); // Will show you exactly the same Array as kvArray

// Or use the spread operator on the keys or values iterator to get
// an array of only the keys or values
write(uneval([...myMap.keys()])); // Will show ["key1", "key2"]


/********************************/
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
