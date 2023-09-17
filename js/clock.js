const clock = document.querySelector("h2#clock");
const today = document.querySelector("h2#today")
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}
function getToday() {
  var now = new Date();	// 현재 날짜 및 시간
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  today.innerText = `${year}년${month}월${date}일`;
}
getToday()
getClock();
setInterval(getToday, 1000);
setInterval(getClock, 1000);
