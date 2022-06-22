var currentNumberWrapper = document.getElementById("currentNumber");
const SUBTRAIR = document.getElementsByName("subtrair");
var currentNumber = 0;
function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
SUBTRAIR.addEventListener("click", decrement);
