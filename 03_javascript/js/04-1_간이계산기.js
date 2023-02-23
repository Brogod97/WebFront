const num1 = document.getElementById("input1"); // 요소 추적O, 값/속성 추적 X
const num2 = document.getElementById("input2");
const rs = document.getElementById("result");

function add() {
  rs.innerText = Number(num1.value) + Number(num2.value);
}
function subtract() {
  rs.innerText = Number(num1.value) - Number(num2.value);
}
function multiply() {
  rs.innerText = Number(num1.value) * Number(num2.value);
}
function divide() {
  rs.innerText = Number(num1.value) / Number(num2.value);
}
function modulus() {
  rs.innerText = Number(num1.value) % Number(num2.value);
}
