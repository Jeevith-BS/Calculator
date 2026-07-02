let display = document.getElementById("display");

// Add numbers/operators
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Calculate
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Square Root
function squareRoot() {
    if (display.value === "") return;

    display.value = Math.sqrt(Number(display.value));
}

// Square
function square() {
    if (display.value === "") return;

    display.value = Math.pow(Number(display.value), 2);
}

// Reciprocal
function reciprocal() {
    if (display.value === "" || Number(display.value) === 0) {
        display.value = "Error";
        return;
    }

    display.value = 1 / Number(display.value);
}

// Backspace
function backspace() {
    display.value = display.value.slice(0, -1);
}