const elements = {
    timer: document.getElementById("timer"),
    start: document.getElementById("btn-start"),
    reset: document.getElementById("btn-reset")
}

let running = false;

function start() {
    running = !running;
    elements.start.innerText = running ? "Stop" : "Start";
    console.log(running);
}


function reset() {
    timer.value = "00:00:00";
    clearInterval()
}

elements.timer.onchange = function (e) {
    var timerRGEX = (\d{ 2}):(\d{ 2 }): (\d{ 2 })
    var validInput = timer.RGEX.test(elements.timer.value);
}