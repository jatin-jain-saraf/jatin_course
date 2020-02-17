// defining var to hold time values
let milliseconds = "00";
let seconds = "00";
let minutes = "00";
let hours = "00";
let intervalHandeler;

let startBtn = document.querySelector("#start")
let stopBtn = document.querySelector("#stop")
let resumeBtn = document.querySelector("#resume")
let resetBtn = document.querySelector("#reset")

startBtn.disabled = false;
stopBtn.disabled = true;
resumeBtn.disabled = true;
resetBtn.disabled = true;

function initialTime() {

    document.getElementById("display").innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}

// stop watch function (logic to determine when to increment next value )
initialTime();

function start() {
    intervalHandeler = setInterval(
        function() {
            milliseconds++;
            //  logic to determine when to increment
            if (milliseconds / 100 === 1) {
                milliseconds = 0;
                seconds++;
                if (seconds / 60 === 1) {
                    seconds = 0;
                    minutes++;
                    if (minutes / 60 === 1) {
                        minutes = 0;
                        hours++;
                    }
                }
            }
            document.getElementById("display").innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
        }, 10);
    startBtn.disabled = true;
    resetBtn.disabled = false;
    stopBtn.disabled = false;
    resumeBtn.disabled = true;
}

function stop() {
    clearInterval(intervalHandeler);
    resumeBtn.disabled = false;
}

function resume() {
    start();
    resumeBtn.disabled = true;
}

function reset() {
    clearInterval(intervalHandeler);
    milliseconds = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    initialTime();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resumeBtn.disabled = true;
    resetBtn.disabled = true;

}
let date = document.getElementById("date");

let d = new Date();
date.innerHTML = d;
let currentTime = d.toLocaleTimeString();
let currentDate = d.toDateString().split(" ");
let CD = currentDate[2] + "-" + currentDate[1] + "-" + currentDate[3];
document.getElementById("time").innerHTML = "Time:-" + currentTime;
document.getElementById("date").innerHTML = "Date:-" + CD;