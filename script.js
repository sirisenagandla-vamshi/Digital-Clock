const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const amPmEl = document.getElementById("amPm");
// console.log(hourEl , minuteEl , secondEl , amPmEl) ;
function digitalClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "Am";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  hourEl.innerHTML = h;
  minuteEl.innerHTML = m;
  secondEl.innerHTML = s;
  amPmEl.innerHTML = ampm;

  setTimeout(() => {
    digitalClock();
  }, 1000);
}
digitalClock();
