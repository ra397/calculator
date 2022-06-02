function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num1;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else {
        return "ERROR";
    }
}

// A string representing the display window 
let expression = '';

// create a reference for all calculator keys
const inputs = document.querySelectorAll('.input');

// create a reference for the display window
const display = document.querySelector('.row.display');

inputs.forEach((input) => {
    input.addEventListener('click', function(e) {
        // update expression
        if (e.target.textContent === '=' || e.target.textContent === '+'
        || e.target.textContent === '−' || e.target.textContent === '×'
        || e.target.textContent === '÷') {
            expression += ' ';
        }
        if (isNaN(expression.charAt(expression.length - 1))) {
            expression += ' ';
        }
        expression += e.target.textContent;
        // update display using expression
        display.textContent = expression;
    })
});