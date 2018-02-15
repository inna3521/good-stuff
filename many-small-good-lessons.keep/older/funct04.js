"use strict";
/* *******************************/

let a = 10;

function printIt01() {
  write("printIt01: " + a);
}

printIt01();

function nested() {
  function printIt02() { // has access to all vars parent has access to
    write("printIt02: " + a);
  }
  return printIt02();
}
nested();

/*
  The result is 8. I don't know how the '3' gets stored in fn_inside
 */

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
let fn_inside = outside(3); // Think of it like: give me a function that adds
                           // 3 to whatever you give it
write("fn_inside = " + fn_inside);

write("Inspect fn_inside", 1);
// console.dir(fn_inside); works but too much output
write(inspect(fn_inside));
write("done", 1);

let result01 = fn_inside(5); // returns 8
write("result01 = " + result01);

/*
let result02 = outside(3)(5); // returns 8
write("result02 = " + result02);
*/
/********************************/
function write(str, num) {
  let out = "<p>";
  if (num == 1) {
    out += "<b>";
  }
  out += str;
  if (num == 1) {
    out += "</b>";
  }
  out += "</p>";

  document.write(out);
}

/*
let obj1 = {
  type: "animal",
  kind: "horse"
};
write("obj1 = " + inspect(obj1));

function inspect(obj, maxLevels, level)
{
  var str = "", type, msg;

    // Start Input Validations
    // Don"t touch, we start iterating at level zero
    if(level == null)  level = 0;

    // At least you want to show the first level
    if(maxLevels == null) maxLevels = 1;
    if(maxLevels < 1)
        return "<font color="red">Error: Levels number must be > 0</font>";

    // We start with a non null object
    if(obj == null)
    return '<font color="red">Error: Object <b>NULL</b></font>';
    // End Input Validations

    // Each Iteration must be indented
    str += '<ul>';

    // Start iterations for all objects in obj
    for(property in obj)
    {
      try
      {
          // Show "property" and "type property"
          type =  typeof(obj[property]);
          //write('type = ' + type);
          str += '<li>(' + type + ') ' + property +
                 ( (obj[property]==null)?(': <b>null</b>'):('')) + '</li>';

          // We keep iterating if this property is an Object, non null
          // and we are inside the required number of levels
          if((type == 'object') && (obj[property] != null) && (level+1 < maxLevels))
          str += inspect(obj[property], maxLevels, level+1);
      }
      catch(err)
      {
        // Is there some properties in obj we can't access? Print it red.
        if(typeof(err) == 'string') msg = err;
        else if(err.message)        msg = err.message;
        else if(err.description)    msg = err.description;
        else                        msg = 'Unknown';

        str += '<li><font color="red">(Error) ' + property + ': ' + msg +'</font></li>';
      }
    }

      // Close indent
      str += '</ul>';

    return str;
}

function objectInspector(object, result) {
    if (typeof object != "object")
        return "Invalid object";
    if (typeof result == "undefined")
        result = '';

    if (result.length > 50)
        return "[RECURSION TOO DEEP. ABORTING.]";

    var rows = [];
    for (var property in object) {
        var datatype = typeof object[property];

        var tempDescription = result+'"'+property+'"';
        tempDescription += ' ('+datatype+') => ';
        if (datatype == "object")
            tempDescription += 'object: '+objectInspector(object[property],result+'  ');
        else
            tempDescription += object[property];

        rows.push(tempDescription);
    }//Close for

    return rows.join(result+"\n");
}//End objectInspector
*/
