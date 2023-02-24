const num1 = document.getElementById("input1");
const num2 = document.getElementById("input2");
const rs = document.getElementById("result");

function calc(btn) {
  const n1 = Number(num1.value);
  const n2 = Number(num2.value);

  const op = btn.innerText; // 클릭된 버튼의 작성된 내용을 얻어옴 (+, -, *, /, %)

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
