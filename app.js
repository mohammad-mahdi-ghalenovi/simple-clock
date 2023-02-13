let currentTime;
let nowSecond;
let nowMinute;
let nowHour;

//dom
let hourElem = document.querySelector(".hour");
let minuteElem = document.querySelector(".minute");
let secondElem = document.querySelector(".second");
let dateElem = document.querySelector(".date");

//change
let changeThemeBtn = document.querySelector(".change-theme");

setInterval(function () {
  currentTime = new Date();
  nowSecond = currentTime.getSeconds();
  nowMinute = currentTime.getMinutes();
  nowHour = currentTime.getHours();
  console.log(nowHour + " : " + nowMinute + " : " + nowSecond);

  if (nowSecond < 10) {
    secondElem.textContent = "0" + nowSecond;
  } else {
    secondElem.textContent = nowSecond;
  }

  if (nowMinute < 10) {
    minuteElem.textContent = "0" + nowMinute;
  } else {
    minuteElem.textContent = nowMinute;
  }

  if (nowHour < 10) {
    hourElem.textContent = "0" + nowHour;
  } else {
    hourElem.textContent = +nowHour;
  }
}, 1000);

// change theme
let isChange = false;
function changeThemeHandler() {
  if (isChange == false) {
    document.documentElement.style.setProperty("--color-num1", "#735F32");
    document.documentElement.style.setProperty("--color-num2", "#282A3A");
    isChange = true;
  } else if (isChange == true) {
    document.documentElement.style.setProperty("--color-num1", "#100f0f");
    document.documentElement.style.setProperty("--color-num2", "#0f3d3e");
    isChange = false;
  }
}

changeThemeBtn.addEventListener("click", changeThemeHandler);
