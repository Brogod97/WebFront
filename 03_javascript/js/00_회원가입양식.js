// 아이디 사용 가능 여부 검사
document.getElementById("userId").addEventListener("keyup", function () {
  const regExp1 = /^[a-z0-9]{5,}$/;
  const idCheck = document.getElementById("idCheck");

  if (regExp1.test(this.value)) {
    idCheck.innerText = "아이디 사용 가능";
  } else {
    idCheck.innerText = "아이디 사용 불가능";
  }
});

// 비밀번호 사용 가능 여부 검사
document.getElementById("pw1").addEventListener("keyup", function () {
  const regExp2 = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)]{8,}$/;
  const pwCheck1 = document.getElementById("pwCheck1");

  if (regExp2.test(this.value)) {
    pwCheck1.innerText = "비밀번호 사용 가능";
  } else {
    pwCheck1.innerText = "비밀번호 사용 불가능";
  }
});

// 비밀번호 일치 여부 검사
document.getElementById("pw2").addEventListener("keyup", function () {
  const pw1 = document.getElementById("pw1").value;

  if (this.value == pw1) {
    pwCheck2.innerText = "비밀번호 일치";
  } else {
    pwCheck2.innerText = "비밀번호 불일치";
  }
});

// 이름 길이 검사
document.getElementById("name").addEventListener("keyup", function () {
  const regExp3 = /^[가-힣]{2,}$/;
  const nameCheck = document.getElementById("nameCheck");

  if (!regExp3.test(this.value)) {
    nameCheck.innerText = "한글 2글자 이상 입력 해주세요";
  } else {
    nameCheck.innerText = "";
  }
});

// 휴대폰 번호 검사
document.getElementById("phone").addEventListener("keyup", function () {
  const regExp4 = /^010[0-9]{1,}$/;
  const phoneCheck = document.getElementById("phoneCheck");

  if (regExp4.test(this.value)) {
    phoneCheck.innerText = "";
  } else {
    phoneCheck.innerText = "010으로 시작하는 숫자 입력";
  }
});

// 주민등록번호 검사
document.getElementById("rrn1").addEventListener("keyup", function () {
  const regExp5 = /[0-9]{6}/;
  const rrnCheck = document.getElementById("rrnCheck");

  if (regExp5.test(this.value)) {
    rrnCheck.innerText = "";
  } else {
    rrnCheck.innerText = "숫자 6자리 입력";
  }
});

document.getElementById("rrn2").addEventListener("keyup", function () {
  const regExp5 = /[1-4]{1}\d{6}/;
  const rrnCheck = document.getElementById("rrnCheck");

  if (regExp5.test(this.value)) {
    rrnCheck.innerText = "";
  } else {
    rrnCheck.innerText = "주민번호 뒷자리가 올바르지 않습니다";
  }
});

// 이메일 검사
document.getElementById("email").addEventListener("keyup", function () {
  const regExp5 = /[a-z0-9]+@[a-z]+\.com$/;
  const emailCheck = document.getElementById("emailCheck");

  if (regExp5.test(this.value)) {
    emailCheck.innerText = "";
  } else {
    emailCheck.innerText = "@ 포함 .com으로 끝나게 작성";
  }
});
