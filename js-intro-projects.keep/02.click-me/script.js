main()

function main() {
  var ele = document.getElementById("click-me");
  ele.addEventListener("click", buttonClicked, false);

}

function buttonClicked() {
  let p = document.createElement('p')
  p.innerHTML = "You clicked me!"
  document.body.appendChild(p)
}
