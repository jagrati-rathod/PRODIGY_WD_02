let minutes = 0;
let seconds = 0;
let tens = 0;
let interval;

let lapButton = document.getElementById("lap");
let lapList = document.getElementById("lapList");
let lapCount = 1;

let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");
let tensElement = document.getElementById("tens");

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

startButton.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10); // every 10ms
};

stopButton.onclick = function () {
    clearInterval(interval);
};

resetButton.onclick = function () {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    tens = 0;
    updateDisplay();
    lapList.innerHTML = "";
    lapCount = 1;

};

function startTimer() {
    tens++;
    if (tens > 99) {
        seconds++;
        tens = 0;
    }
    if (seconds > 59) {
        minutes++;
        seconds = 0;
    }
    updateDisplay();
}

function updateDisplay() {
    tensElement.textContent = tens < 10 ? "0" + tens : tens;
    secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
    minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
}
lapButton.onclick = function () {
    const lapTime = `${minutesElement.textContent}:${secondsElement.textContent}:${tensElement.textContent}`;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCount++}: ${lapTime}`;
    lapList.appendChild(lapItem);
};
let clearLapsButton = document.getElementById("clearLaps");

clearLapsButton.onclick = function () {
    lapList.innerHTML = "";
    lapCount = 1;
};

