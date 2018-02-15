'use strict';
/********************************/

function myConcat(separator) {
   var result = ""; // initialize list
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}

// returns "red, orange, blue, "
let ret = myConcat(", ", "red", "orange", "blue");
write(ret);
// returns "elephant; giraffe; lion; cheetah; "
ret = myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
write(ret);
// returns "sage. basil. oregano. pepper. parsley. "
ret = myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
write(ret);



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
