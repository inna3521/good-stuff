'use strict';
/********************************/

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
write(pet.getName());                  // Vivie

pet.setName("Oliver");
pet.setSex("male");
write(pet.getSex());                   // male
write(pet.getName());                  // Oliver

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
