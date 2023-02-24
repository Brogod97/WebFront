const num1 = document.getElementById("input1");
const num2 = document.getElementById("input2");
const rs = document.getElementById("result");

function calc(op) {
  // op에는 +, -, *, /, % 중 하나가 전달됨

  const n1 = Number(num1.value);
  const n2 = Number(num2.value);

  switch (op) {
    case "+":
      rs.innerText = n1 + n2;
      break;
    case "-":
      rs.innerText = n1 - n2;
      break;
    case "*":
      rs.innerText = n1 * n2;
      break;
    case "/":
      rs.innerText = n1 / n2;
      break;
    case "%":
      rs.innerText = n1 % n2;
      break;
  }
}
