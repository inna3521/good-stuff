main()
function main() {
  let ele = document.getElementById("btn-red");
  ele.addEventListener("click", changeLight, false);
  ele = document.getElementById("btn-yellow");
  ele.addEventListener("click", changeLight, false);
  ele = document.getElementById("btn-green");
  ele.addEventListener("click", changeLight, false);
}



function changeLight(e) {
  const top = document.getElementById('top')
  const middle = document.getElementById('middle')
  const bottm = document.getElementById('bottom')
  const color = e.target.value
  if (color === 'red') {
    top.src = 'images/red-on.svg'
    middle.src = 'images/yellow-off.svg'
    bottom.src = 'images/green-off.svg'
  } else if (color === 'yellow') {
    top.src = 'images/red-off.svg'
    middle.src = 'images/yellow-on.svg'
    bottom.src = 'images/green-off.svg'
  } else {
    top.src = 'images/red-off.svg'
    middle.src = 'images/yellow-off.svg'
    bottom.src = 'images/green-on.svg'
  }
}
