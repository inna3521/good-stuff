'use strict';

function write(str) {
  document.write('<p>' + str + '</p>');
}

/********************************/


var y = function x(){return 'cat';}
write(y());

var x = function() {return 'dog';}
write(x());

var z = () => 'horse';
write(z());

if ('function' == typeof z) {
    write('z exists');
  } else {
    write('z does not exist');
  }


