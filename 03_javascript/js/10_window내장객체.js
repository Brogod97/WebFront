// window.setTimeout(함수, 지연시간(ms))

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
  // 0초 (클릭하자마자 지연시간 X)
  this.style.backgroundColor = "red";

  // 3초 후 orange 로 변경
  window.setTimeout(function () {
    // window.setTimeout() 에서 this == window 객체
    btn1.style.backgroundColor = "orange";
  }, 3000);

  console.log("중간에 출력");

  // 6초 후 yellow로 변경
  window.setTimeout(function () {
    btn1.style.backgroundColor = "yellow";
  }, 6000);

  // 9초 후 green으로 변경
  window.setTimeout(function () {
    btn1.style.backgroundColor = "green";
  }, 9000);
});

// 현재 시간을 반환하는 함수
function currentTime() {
  const now = new Date(); // 현재 시간 정보를 저장하고 있는 객체 생성

  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  // 얻어온 시간 값이 10 미만일 경우 앞에 0 추가
  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  return `${hour} : ${min} : ${sec}`;
}

// 페이지가 로딩되자마자 clock에 현재 시간 출력
const clock = document.getElementById("clock");
clock.innerText = currentTime();

// #clock에 1초마다 현재 시간을 출력
const interval = window.setInterval(() => {
  clock.innerText = currentTime();
}, 1000);

document.getElementById("stop").addEventListener("click", () => {
  window.clearInterval(interval);
});
