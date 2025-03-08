const display = document.getElementById('display');

function appendNumber(number) {
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendSymbol(symbol) {
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/', '.'].includes(lastChar) && symbol !== '.') return;
    display.value += symbol;
}

function clearDisplay() {
    display.value = "0";
}

function backspace() {
    display.value = display.value.slice(0, -1) || "0";
}

function toggleSign() {
    if (display.value === "0") return;
    display.value = display.value.startsWith('-') ? display.value.slice(1) : `-${display.value}`;
}

function calculate() {
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch {
        display.value = "Error";
    }
}
