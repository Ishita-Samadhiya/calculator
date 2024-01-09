const display = document.getElementById('display');//get the top bar

function updateDisplay(value) {//shows each button clicked if normal
    display.value += value;
}

function clearDisplay() {//clears when c clicked
    display.value = '';
}

function calculate() {//calculate and display
    try {
        const result = eval(display.value);
        if (isNaN(result)) {//handle eroors
            display.value = 'Error';
        } else if (result === Infinity) {//divide by zero
            display.value = 'Infinity';
        } else {//normal
            display.value = result;
        }
    } catch (error) {// to stop from running once error found
        display.value = 'Error';
    }
}
