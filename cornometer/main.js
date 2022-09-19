class Timer {
  seconds = 0;
  minutes = 0;
  hours = 0;
  interValid = null;
  constructor(onTimeChange) {
    this.onTimeChange = onTimeChange;
  }
  getTime() {
    return this.hours + ":" + this.minutes + ":" + this.seconds;
  }
  updateTime() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }
    const currentTime = this.getTime();
    this.onTimeChange(currentTime);
  }
  start() {
    if (this.interValid) {
      return;
    }
    this.interValid = setInterval(() => {
      this.updateTime();
    }, 1000);
  }
  stop() {
    clearInterval(this.interValid);
    this.interValid = null;
  }
  reset() {
    this.seconds = 0;
    this.hours = 0;
    this.minutes = 0;
    const currentTime = this.getTime();
    this.onTimeChange(currentTime);
  }
}
function onTimeChange(currentTime) {
  counter.innerText = currentTime;
}
const timer = new Timer(onTimeChange);
const counter = document.querySelector(".counter");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
function start() {
  timer.start();
}
function stop() {
  timer.stop();
}
function reset() {
  timer.reset();
}
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
