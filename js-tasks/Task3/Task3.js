let previousTimeoutId = undefined;
let previousInputTimeoutId = null;
let secondsIntervalId = undefined;

function displayHelloWorld() {
    if (previousTimeoutId) {
        clearTimeout(previousTimeoutId);
    }

    previousTimeoutId = setTimeout(() => {
        console.log('Hello World!');
    }, 5000);
}
exports.displayHelloWorld = displayHelloWorld;

let intervalId = undefined;

function displayRecurringMessage() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
        return;
    }

    intervalId = setInterval(displayMessage, 3000);
}
exports.displayRecurringMessage = displayRecurringMessage;

function displayMessage() {
    console.log('You are welcome!');
}

function displaySecondsHandler() {
    if (secondsIntervalId) {
        clearInterval(secondsIntervalId);
        secondsIntervalId = undefined;
        return;
    }

    displaySeconds();
}
exports.displaySecondsHandler = displaySecondsHandler;

function displaySeconds() {
    let seconds = Math. floor(Math. random()*4) + 1;
    secondsIntervalId = setTimeout(() => {
        console.log(seconds + ' seconds');
        displaySeconds();
    }, seconds*1000);
}


function sendInputToConsole() {
    if (previousInputTimeoutId) {
        clearTimeout(previousInputTimeoutId);
    }

    previousInputTimeoutId = setTimeout(() => {
        let message = document.getElementById("input").value;
        console.log(message);
    }, 1000);
}
exports.sendInputToConsole = sendInputToConsole;