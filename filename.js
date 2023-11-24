function displayText() {
  let text = document.getElementById("textField");
  text.style.display = "block";
}

const myButton = document.getElementById("buybutton");
myButton.addEventListener("mouseover", buttonColor);
function buttonColor() {
  myButton.style.backgroundColor = "blue";
}
myButton.addEventListener("mouseout", buttonColorout);
function buttonColorout() {
  myButton.style.backgroundColor = "deeppink";
}
