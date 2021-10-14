setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const time = document.querySelector('.time');

function setClock() {
  let curTime = time;
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  curTime.textContent = `Current time ${currentDate.getHours()}h ${currentDate.getMinutes()}min ${currentDate.getSeconds()}sec`;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(elem, rotatioRatio) {
  elem.style.setProperty('--rotation', rotatioRatio * 360);
}

setClock();
