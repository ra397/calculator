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

function hasOperator(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '=' || str.charAt(i) === '+'
        || str.charAt(i) === '−' || str.charAt(i) === '×'
        || str.charAt(i) === '÷') {
            return true;
        } 
    }
    return false;
}

function evaluate_expression(str) {
    console.log(str);
}

// A string representing the display window 
let expression = '';

// create a reference for all number keys
const inputs = document.querySelectorAll('.input');

// create a reference for all operator keys
const operators = document.querySelectorAll('.input.operator');

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

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        /*
            Specifications:
            1- cannot input operator if expression is empty
            2- equals operator cannot be first operator in expression
            3- With every operator input:
                - evaluate and update expression
                - display updated expression with the new operator,
                unless the operator was =, then display result only
        */
    })
})