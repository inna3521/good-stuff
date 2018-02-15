let pokemonLeft = 0
let pokemonTop = 0

handleKeyEvents()
function handleKeyEvents() {
    // var elButton = document.getElementById("btn-random");
    // elButton.addEventListener("click", getRandomPage, false);

    let explode = document.getElementById("explode");
    window.addEventListener("keydown", function(event) {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
      switch (event.key) {
        case "ArrowDown":
          moveDown()
          break;
        case "ArrowUp":
          moveUp()
          break;
        case "ArrowLeft":
          moveLeft()
          break;
        case "ArrowRight":
          moveRight()
          break;
        case "Enter":
          explode.style.left = pokemonLeft + 'px'
          explode.style.top = pokemonTop + 'px'
          explode.classList.remove("explode-hide");
          explode.classList.add("explode-show");

          break;
        case "Escape":
          // Do something for "esc" key press.
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
      event.preventDefault();
    }, true)
  }



function move2() {
  let elem = getPokemon()
  let posL = 0
  let posT = 0
  let id1 = setInterval(moveIt1, 10)

  function moveIt1() {
    if (posL < 150 || posT < 100) {
      posL++
      posT++
      if (posT < 100) {
        elem.style.top = posT + 'px';
      }
      if (posL < 150) {
        elem.style.left = posL + 'px';
      }
      console.log('top', elem.style.top)
      console.log('left', elem.style.left)
    } else {
      clearInterval(id1)
    }
  }
}


function moveRight() {
  let elem = getPokemon()
  pokemonLeft += 15
  console.log('pokemonLeft', pokemonLeft)
  elem.style.left = pokemonLeft + 'px'
}


function moveDown() {
  let elem = getPokemon()
  pokemonTop += 15
  console.log('pokemonTop', pokemonTop)
  elem.style.top = pokemonTop + 'px'
}


function moveLeft() {
  let elem = getPokemon()
  pokemonLeft -= 15
  console.log('pokemonLeft', pokemonLeft)
  elem.style.left = pokemonLeft + 'px'
}


function moveUp() {
  let elem = getPokemon()
  pokemonTop -= 15
  console.log('pokemonTop', pokemonTop)
  elem.style.top = pokemonTop + 'px'
}


function getPokemon() {
  return document.getElementById("pokemon");
}

















function p(txt) {
  document.write(`<p>${txt}</p>`)
}
