// 검사 항목 확인용 count
let count = 0;

// element에 .confirm 추가
function addConfirm(e) {
  e.classList.add("confirm");
  e.classList.remove("wrong");
}

// element에 .wrong 추가
function addWrong(e) {
  e.classList.add("wrong");
  e.classList.remove("confirm");
}

// 아이디 사용 가능 여부 검사
document.getElementById("userId").addEventListener("keyup", function () {
  const regExp = /^[a-z0-9]{5,}$/;

  const idCheck = document.getElementById("idCheck");

  if (regExp.test(this.value)) {
    idCheck.innerText = "아이디 사용 가능";
    addConfirm(idCheck);
    count++;
  } else {
    idCheck.innerText = "아이디 사용 불가능";
    addWrong(idCheck);
  }
});

// 비밀번호 사용 가능 여부 검사
document.getElementById("pw1").addEventListener("keyup", function () {
  const regExp = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)]{8,}$/;
  const pwCheck1 = document.getElementById("pwCheck1");

  if (regExp.test(this.value)) {
    pwCheck1.innerText = "비밀번호 사용 가능";
    addConfirm(pwCheck1);
    count++;
  } else {
    pwCheck1.innerText = "비밀번호 사용 불가능";
    addWrong(pwCheck1);
  }
});

// 비밀번호 일치 여부 검사
document.getElementById("pw2").addEventListener("keyup", function () {
  const pw1 = document.getElementById("pw1").value;
  const pwCheck2 = document.getElementById("pwCheck2");

  if (this.value == pw1) {
    pwCheck2.innerText = "비밀번호 일치";
    addConfirm(pwCheck2);
    count++;
  } else {
    pwCheck2.innerText = "비밀번호 불일치";
    addWrong(pwCheck2);
  }
});

// 이름 길이 검사
document.getElementById("name").addEventListener("keyup", function () {
  const regExp = /^[가-힣]{2,}$/;
  const nameCheck = document.getElementById("nameCheck");

  if (!regExp.test(this.value)) {
    nameCheck.innerText = "한글 2글자 이상 입력";
    addWrong(nameCheck);
  } else {
    nameCheck.innerText = "이름 확인";
    addConfirm(nameCheck);
    count++;
  }
});

// 휴대폰 번호 검사
document.getElementById("phone").addEventListener("keyup", function () {
  const regExp = /^010[0-9]{1,}$/;
  const phoneCheck = document.getElementById("phoneCheck");

  if (regExp.test(this.value)) {
    phoneCheck.innerText = "휴대폰 번호 확인";
    addConfirm(phoneCheck);
    count++;
  } else {
    phoneCheck.innerText = "010으로 시작하는 숫자 입력";
    addWrong(phoneCheck);
  }
});

// 주민등록번호 검사
document.getElementById("rrn1").addEventListener("keyup", function () {
  const regExp = /[0-9]{6}/;
  const rrnCheck = document.getElementById("rrnCheck");

  if (regExp.test(this.value)) {
    rrnCheck.innerText = "";
    count++;
  } else {
    rrnCheck.innerText = "숫자 6자리 입력";
    addWrong(rrnCheck);
  }
});

document.getElementById("rrn2").addEventListener("keyup", function () {
  const regExp = /[1-4]{1}\d{6}/;
  const rrnCheck = document.getElementById("rrnCheck");

  if (regExp.test(this.value)) {
    rrnCheck.innerText = "주민등록 번호 확인";
    addConfirm(rrnCheck);
    count++;
  } else {
    rrnCheck.innerText = "주민번호 뒷자리가 올바르지 않습니다";
    addWrong(rrnCheck);
  }
});

// 이메일 검사
document.getElementById("email").addEventListener("keyup", function () {
  const regExp = /[a-z0-9]+@[a-z]+\.com$/;
  const emailCheck = document.getElementById("emailCheck");

  if (regExp.test(this.value)) {
    emailCheck.innerText = "이메일 확인";
    addConfirm(emailCheck);
    count++;
  } else {
    emailCheck.innerText = "@ 포함 .com으로 끝나게 작성";
    addWrong(emailCheck);
  }
});

document.getElementById("submitBtn").addEventListener("click", function () {
  if (count >= 8) {
    alert("사용 가능한 계정입니다!");
  } else {
    alert("유효성 검사가 완료되지 않았습니다");
  }
});
